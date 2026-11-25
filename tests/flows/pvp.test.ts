import { DB } from '@neogroup/neorm'
import { beforeEach, describe, expect, it } from 'vitest'
import { chooseStarter } from '@/app/(protected)/(collection)/services/collection'
import { PLANNING_SECONDS } from '@/app/(protected)/(engine)/data/rules'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { DEADLINE_GRACE_MS, MULLIGAN_SECONDS, ROOM_TTL_MS } from '@/app/(protected)/(pvp)/data/pvp'
import { MatchView } from '@/app/(protected)/(pvp)/models/MatchView'
import { forfeitMatch, getMatchState, submitMulligan, submitPlan, tick } from '@/app/(protected)/(pvp)/services/matches'
import { findMatch } from '@/app/(protected)/(pvp)/services/matchRows'
import { activeMatchId, createRoom, joinRoom, listRooms, quickMatch } from '@/app/(protected)/(pvp)/services/rooms'
import { HIDDEN_CARD } from '@/app/(protected)/(pvp)/utils/redact'
import { createUser, resetDatabase } from '@/tests/setup/database'

const T0 = Date.UTC(2026, 10, 20, 12, 0, 0)

async function player(email: string, heroId: string): Promise<{ id: number; deckId: number }> {
  const id = await createUser(email)
  const { deckId } = await chooseStarter(id, heroId)

  return { id, deckId }
}

async function user(id: number): Promise<Record<string, unknown>> {
  return (await DB.table('users').where('id', id).first())!
}

describe('rooms', () => {
  let ana: { id: number; deckId: number }
  let bob: { id: number; deckId: number }

  beforeEach(async () => {
    await resetDatabase()
    ana = await player('ana@chronocast.test', 'legate-varro')
    bob = await player('bob@chronocast.test', 'kora-wildfang')
  })

  it('lists the public rooms of others, and a public room can be joined', async () => {
    const { id, code } = await createRoom(ana.id, 'public', ana.deckId, T0)

    expect(code).toBeNull()
    expect(await listRooms(ana.id, T0)).toEqual([])
    expect(await listRooms(bob.id, T0)).toEqual([
      { id, host: 'Player', rating: 1200, heroId: 'legate-varro', expiresIn: ROOM_TTL_MS }
    ])

    await joinRoom(bob.id, { matchId: id }, bob.deckId, T0)

    const view = (await getMatchState(bob.id, id, null, T0))!

    expect(view).toMatchObject({ status: 'playing', stage: 'mulligan', me: 'b', deadlineIn: MULLIGAN_SECONDS * 1000 })
    expect(view.rival).toMatchObject({ heroId: 'legate-varro' })
    expect(await listRooms(bob.id, T0)).toEqual([])
  })

  it('private rooms are only joined with their code, and not listed', async () => {
    const { id, code } = await createRoom(ana.id, 'private', ana.deckId, T0)

    expect(code).toMatch(/^[A-Z]{6}$/)
    expect(await listRooms(bob.id, T0)).toEqual([])
    await expect(joinRoom(bob.id, { matchId: id }, bob.deckId, T0)).rejects.toMatchObject({
      messageKey: 'errors.roomNotFound'
    })
    await expect(joinRoom(bob.id, { code: 'ZZZZZZ' }, bob.deckId, T0)).rejects.toMatchObject({
      messageKey: 'errors.roomCodeNotFound'
    })
    expect(await joinRoom(bob.id, { code: code!.toLowerCase() }, bob.deckId, T0)).toEqual({ id })
  })

  it('refuses a second match, an unfinished deck, the own room and a taken room', async () => {
    const { id } = await createRoom(ana.id, 'public', ana.deckId, T0)

    await expect(createRoom(ana.id, 'public', ana.deckId, T0)).rejects.toMatchObject({
      messageKey: 'errors.alreadyInMatch'
    })
    await expect(joinRoom(ana.id, { matchId: id }, ana.deckId, T0)).rejects.toMatchObject({
      messageKey: 'errors.alreadyInMatch'
    })

    await DB.table('deck_cards').where('deckId', bob.deckId).delete()
    await expect(joinRoom(bob.id, { matchId: id }, bob.deckId, T0)).rejects.toMatchObject({
      messageKey: 'errors.deckNotPlayable'
    })

    const carl = await player('carl@chronocast.test', 'ilyra-starweaver')

    await joinRoom(carl.id, { matchId: id }, carl.deckId, T0)

    const dana = await player('dana@chronocast.test', 'ilyra-starweaver')

    await expect(joinRoom(dana.id, { matchId: id }, dana.deckId, T0)).rejects.toMatchObject({
      messageKey: 'errors.roomTaken'
    })
  })

  it('closes a room without a rival after 10 minutes, or when its host leaves', async () => {
    const { id } = await createRoom(ana.id, 'public', ana.deckId, T0)

    expect(await listRooms(bob.id, T0 + ROOM_TTL_MS + 1)).toEqual([])
    expect((await findMatch(id))!.status).toBe('closed')
    expect(await activeMatchId(ana.id, T0 + ROOM_TTL_MS + 1)).toBeNull()

    const second = await createRoom(ana.id, 'public', ana.deckId, T0 + ROOM_TTL_MS + 2)

    expect((await forfeitMatch(ana.id, second.id, T0 + ROOM_TTL_MS + 3)).status).toBe('closed')
  })

  it('quick match joins an open room, or opens one', async () => {
    expect(await quickMatch(ana.id, ana.deckId, T0)).toMatchObject({ joined: false })
    expect(await quickMatch(bob.id, bob.deckId, T0)).toMatchObject({ joined: true })
  })
})

describe('a match', () => {
  let ana: { id: number; deckId: number }
  let bob: { id: number; deckId: number }
  let matchId: number

  async function start(visibility: 'public' | 'private' = 'public', now = T0): Promise<void> {
    const room = await createRoom(ana.id, visibility, ana.deckId, now)

    matchId = room.id
    await joinRoom(bob.id, room.code ? { code: room.code } : { matchId }, bob.deckId, now)
    await submitMulligan(ana.id, matchId, [], now)
    await submitMulligan(bob.id, matchId, [], now)
  }

  beforeEach(async () => {
    await resetDatabase()
    ana = await player('ana@chronocast.test', 'legate-varro')
    bob = await player('bob@chronocast.test', 'kora-wildfang')
  })

  it('never shows a player the rival hand, the decks nor the random generator', async () => {
    await start()

    const view = (await getMatchState(ana.id, matchId, null, T0))!
    const rival = view.state!.players.b
    const own = view.state!.players.a

    expect(rival.hand.length).toBeGreaterThan(0)
    expect(rival.hand.every((card) => card.cardId === HIDDEN_CARD)).toBe(true)
    expect(rival.deck.every((card) => card.cardId === HIDDEN_CARD)).toBe(true)
    // The own deck is hidden too, except its artifacts (an ability lets the player choose one):
    // first, sorted by id, so neither their place in the deck nor the order of the rest is told.
    const shown = own.deck.filter((card) => card.cardId !== HIDDEN_CARD).map((card) => card.cardId)

    expect(shown.every((cardId) => getCard(cardId).type === 'artifact')).toBe(true)
    expect(shown).toEqual([...shown].sort())
    expect(own.deck.slice(0, shown.length).map((card) => card.cardId)).toEqual(shown)
    expect(own.hand.every((card) => card.cardId !== HIDDEN_CARD)).toBe(true)
    expect(view.state!.rng).toBe(0)
    expect(view.state!.seed).toBe(0)
  })

  it('starts the planning when both kept their hands, and resolves when both timelines are in', async () => {
    await start()

    let view = (await getMatchState(ana.id, matchId, null, T0))!

    expect(view).toMatchObject({ stage: 'planning', submitted: false, rivalReady: false })
    expect(view.deadlineIn).toBe(PLANNING_SECONDS * 1000)

    view = await submitPlan(ana.id, matchId, 1, [{ kind: 'wait' }], T0 + 1000)
    expect(view).toMatchObject({ submitted: true, rivalReady: false, resolution: null })
    expect((await getMatchState(bob.id, matchId, null, T0 + 1000))!.rivalReady).toBe(true)

    view = await submitPlan(bob.id, matchId, 1, [], T0 + 2000)
    expect(view.state!.phase).toBe(2)
    expect(view.resolution).toMatchObject({ phase: 1 })
    expect(view.resolution!.frames.length).toBeGreaterThan(0)
    expect(view.resolution!.frames.every((frame) => frame.state.rng === 0)).toBe(true)
    expect(view).toMatchObject({ submitted: false, rivalReady: false })

    await expect(submitPlan(ana.id, matchId, 1, [], T0 + 3000)).rejects.toMatchObject({
      messageKey: 'errors.phaseOver'
    })
  })

  it('answers null while nothing changed', async () => {
    await start()

    const view = (await getMatchState(ana.id, matchId, null, T0))!

    expect(await getMatchState(ana.id, matchId, view.version, T0 + 500)).toBeNull()
    await expect(getMatchState(9999, matchId, null, T0)).rejects.toMatchObject({ messageKey: 'errors.notInMatch' })
  })

  it('resolves a phase with "wait" for whoever sent nothing once the deadline passes', async () => {
    await start()
    await submitPlan(ana.id, matchId, 1, [{ kind: 'wait' }], T0)

    expect((await getMatchState(ana.id, matchId, null, T0 + PLANNING_SECONDS * 1000))!.state!.phase).toBe(1)

    const late = T0 + PLANNING_SECONDS * 1000 + DEADLINE_GRACE_MS + 1
    const view = (await getMatchState(ana.id, matchId, null, late))!

    expect(view.state!.phase).toBe(2)
    expect(view.state!.players.b.idlePhases).toBe(1)
  })

  it('skips the mulligan of whoever did not choose in time', async () => {
    const room = await createRoom(ana.id, 'public', ana.deckId, T0)

    await joinRoom(bob.id, { matchId: room.id }, bob.deckId, T0)
    await submitMulligan(ana.id, room.id, [], T0)

    const view = (await getMatchState(ana.id, room.id, null, T0 + MULLIGAN_SECONDS * 1000 + DEADLINE_GRACE_MS + 1))!

    expect(view.stage).toBe('planning')
  })

  it('3 phases without programming lose by abandon', async () => {
    await start()

    let now = T0

    for (let phase = 1; phase <= 3; phase++) {
      await submitPlan(ana.id, matchId, phase, [{ kind: 'sacrifice', cardUid: 99999 }], now)

      const match = (await findMatch(matchId))!

      now = match.phaseDeadline! + DEADLINE_GRACE_MS + 1
      await getMatchState(ana.id, matchId, null, now)
    }

    const view = (await getMatchState(ana.id, matchId, null, now))!

    expect(view.status).toBe('finished')
    expect(view.state!.result).toEqual({ winner: 'a', reason: 'abandon' })
    expect(view.reward).toMatchObject({ gold: 140, firstWin: true })
    expect((await getMatchState(bob.id, matchId, null, now))!.reward).toMatchObject({ gold: 0 })
  })

  it('a surrender ends the match and pays the public rewards once', async () => {
    await start()

    const view = await forfeitMatch(bob.id, matchId, T0 + 5000)

    expect(view.state!.result).toEqual({ winner: 'a', reason: 'surrender' })
    expect(view.reward).toEqual({ ratingDelta: -15, rating: 1185, gold: 0, firstWin: false })

    const winner = await user(ana.id)

    expect(Number(winner.rating)).toBe(1215)
    expect(Number(winner.gold)).toBe(140)
    expect(Number(winner.pvpmatches ?? winner.pvpMatches)).toBe(1)
    expect(Number((await user(bob.id)).rating)).toBe(1185)

    // Nothing more after the end.
    await forfeitMatch(ana.id, matchId, T0 + 6000)
    expect(Number((await user(ana.id)).gold)).toBe(140)
    expect(await activeMatchId(ana.id, T0 + 6000)).toBeNull()
  })

  it('the first win of the day pays the bonus only once a day', async () => {
    await start('public', T0)
    await forfeitMatch(bob.id, matchId, T0 + 1000)
    await start('public', T0 + 2000)
    await forfeitMatch(bob.id, matchId, T0 + 3000)

    expect(Number((await user(ana.id)).gold)).toBe(140 + 40)
  })

  it('private matches keep the rating, pay half and nothing after 3 a day against the same rival', async () => {
    for (let i = 0; i < 4; i++) {
      await start('private', T0 + i * 10_000)
      await forfeitMatch(bob.id, matchId, T0 + i * 10_000 + 5000)
    }

    const winner = await user(ana.id)

    expect(Number(winner.rating)).toBe(1200)
    expect(Number(winner.gold)).toBe(3 * 20)
  })

  it('two requests resolving the same phase resolve it only once', async () => {
    await start()
    await submitPlan(ana.id, matchId, 1, [], T0)

    const stale = (await findMatch(matchId))!
    const late = stale.phaseDeadline! + DEADLINE_GRACE_MS + 1
    const [first, second] = await Promise.all([tick(stale, late), tick(stale, late)])

    expect(first.state!.phase).toBe(2)
    expect(second.state!.phase).toBe(2)
    expect((await findMatch(matchId))!.version).toBe(stale.version + 1)
  })

  it('rejects malformed timelines', async () => {
    await start()

    for (const bad of [[{ kind: 'nuke' }], [1, 2, 3, 4, 5, 6], 'wait', [{ kind: 'play', cardUid: 'x' }]]) {
      await expect(submitPlan(ana.id, matchId, 1, bad, T0)).rejects.toMatchObject({
        messageKey: 'errors.invalidPlan'
      })
    }
  })
})

export type { MatchView }

describe('the ranking', () => {
  it('lists the players with public matches by rating, and the own position', async () => {
    const { getRanking } = await import('@/app/(protected)/(ranking)/services/ranking')

    await resetDatabase()

    const ana = await player('ana@chronocast.test', 'legate-varro')
    const bob = await player('bob@chronocast.test', 'kora-wildfang')
    const carl = await createUser('carl@chronocast.test')
    const room = await createRoom(ana.id, 'public', ana.deckId, T0)

    await joinRoom(bob.id, { matchId: room.id }, bob.deckId, T0)
    await forfeitMatch(bob.id, room.id, T0)

    const ranking = await getRanking(bob.id)

    expect(ranking.top.map((entry) => [entry.userId, entry.position, entry.rating])).toEqual([
      [ana.id, 1, 1215],
      [bob.id, 2, 1185]
    ])
    expect(ranking.me).toMatchObject({ position: 2, league: 'traveler', matches: 1 })
    expect((await getRanking(carl)).me).toBeNull()
  })
})
