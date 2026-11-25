import { DB } from '@neogroup/neorm'
import { beforeEach, describe, expect, it } from 'vitest'
import { QUICK_MATCH_AI_LEVEL, QUICK_MATCH_TTL_MS } from '@/app/(protected)/(battle)/data/quickMatch'
import { QuickMatchTicket } from '@/app/(protected)/(battle)/models/QuickMatchDto'
import {
  finishQuickMatch,
  quickMatchGold,
  quickMatchXp,
  startQuickMatch
} from '@/app/(protected)/(battle)/services/quickMatches'
import { createPracticeMatch } from '@/app/(protected)/(battle)/utils/practice'
import { BattleRecord } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { chooseStarter } from '@/app/(protected)/(collection)/services/collection'
import { chooseTimeline } from '@/app/(protected)/(engine)/ai/chooseTimeline'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { mulligan } from '@/app/(protected)/(engine)/utils/createMatch'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { activeMatchId } from '@/app/(protected)/(pvp)/services/rooms'
import { QUICK_MATCH_GOLD } from '@/app/(protected)/(shop)/data/gold'
import { createUser, resetDatabase } from '@/tests/setup/database'

const HERO = 'kora-wildfang'
const T0 = Date.UTC(2026, 10, 20, 12, 0, 0)

/** Plays a dealt quick match as the browser does, the player's side by a computer level. */
function play(dealt: QuickMatchTicket): { record: BattleRecord; state: MatchState } {
  let state = mulligan(createPracticeMatch(dealt.deck, dealt.rival, dealt.seed), 'a', [])
  const record: BattleRecord = { mulligan: [], timelines: [] }

  while (state.status === 'planning') {
    const timeline = chooseTimeline(state, 'a', 4)

    record.timelines.push(timeline)
    state = resolvePhase(state, { a: timeline, b: chooseTimeline(state, 'b', QUICK_MATCH_AI_LEVEL) }).state
  }

  return { record, state }
}

async function gold(userId: number): Promise<number> {
  return Number((await DB.table('users').where('id', userId).first())!.gold)
}

describe('quick matches against the CPU', () => {
  let userId: number
  let deckId: number

  beforeEach(async () => {
    await resetDatabase()
    userId = await createUser()
    deckId = (await chooseStarter(userId, HERO)).deckId
  })

  it('pays less than a public online match, by result', () => {
    expect(QUICK_MATCH_GOLD.win).toBeLessThan(40)
    expect(quickMatchGold({ winner: 'a', reason: 'hero' })).toBe(QUICK_MATCH_GOLD.win)
    expect(quickMatchGold({ winner: 'b', reason: 'hero' })).toBe(QUICK_MATCH_GOLD.loss)
    expect(quickMatchGold({ winner: null, reason: 'phaseLimit' })).toBe(QUICK_MATCH_GOLD.draw)
  })

  it('the server deals the match; a replayed record pays its gold once, without Prestige', async () => {
    const before = await gold(userId)
    const dealt = await startQuickMatch(userId, deckId, null, T0)

    expect(dealt.deck.heroId).toBe(HERO)
    expect(dealt.rival.heroId).not.toBe(HERO)
    expect(await activeMatchId(userId, T0)).toBeNull()

    const { record, state } = play(dealt)
    const reward = await finishQuickMatch(userId, dealt.matchId, record, T0)

    expect(reward).toMatchObject({
      ratingDelta: 0,
      firstWin: false,
      capped: false,
      gold: quickMatchGold(state.result!),
      xp: quickMatchXp(state.result!),
      level: { xp: quickMatchXp(state.result!), level: 1, levelsGained: 0, gold: 0 }
    })
    expect(await gold(userId)).toBe(before + reward.gold)

    // The same claim again pays nothing.
    await expect(finishQuickMatch(userId, dealt.matchId, record, T0)).rejects.toMatchObject({
      messageKey: 'errors.invalidTicket'
    })
    expect(await gold(userId)).toBe(before + reward.gold)
  })

  it('a rematch faces the same rival with a new seed, and closes the earlier unclaimed match', async () => {
    const first = await startQuickMatch(userId, deckId, null, T0)
    const rematch = await startQuickMatch(userId, deckId, first.matchId, T0)

    expect(rematch.rival).toEqual(first.rival)
    expect(rematch.matchId).not.toBe(first.matchId)
    await expect(finishQuickMatch(userId, first.matchId, play(first).record, T0)).rejects.toMatchObject({
      messageKey: 'errors.invalidTicket'
    })
  })

  it('rejects a record that does not reach the end, another player, an unknown match and an expired one', async () => {
    const dealt = await startQuickMatch(userId, deckId, null, T0)
    const { record } = play(dealt)
    const short = { mulligan: [], timelines: record.timelines.slice(0, 1) }

    await expect(finishQuickMatch(userId, dealt.matchId, short, T0)).rejects.toMatchObject({
      messageKey: 'errors.battleNotVerified'
    })
    await expect(finishQuickMatch(userId, dealt.matchId, { timelines: 'nope' }, T0)).rejects.toMatchObject({
      messageKey: 'errors.invalidRecord'
    })
    await expect(finishQuickMatch(userId + 1, dealt.matchId, record, T0)).rejects.toMatchObject({
      messageKey: 'errors.invalidTicket'
    })
    await expect(finishQuickMatch(userId, 9999, record, T0)).rejects.toMatchObject({
      messageKey: 'errors.invalidTicket'
    })
    await expect(finishQuickMatch(userId, dealt.matchId, record, T0 + QUICK_MATCH_TTL_MS + 1)).rejects.toMatchObject({
      messageKey: 'errors.ticketExpired'
    })
  })

  it('pays at most a few quick matches a day', async () => {
    const before = await gold(userId)
    let paid = 0

    for (let i = 0; i < QUICK_MATCH_GOLD.prizesPerDay + 1; i++) {
      const dealt = await startQuickMatch(userId, deckId, null, T0)
      const played = play(dealt)
      const reward = await finishQuickMatch(userId, dealt.matchId, played.record, T0 + i)

      expect(reward.capped).toBe(i >= QUICK_MATCH_GOLD.prizesPerDay)
      expect(reward.xp).toBe(reward.capped ? 0 : quickMatchXp(played.state.result!))
      // The gold of the match plus 1,000 for each level its XP gave.
      paid += reward.gold + (reward.level?.gold ?? 0)
    }

    expect(await gold(userId)).toBe(before + paid)

    // A new day pays again.
    const dealt = await startQuickMatch(userId, deckId, null, T0 + 86_400_000)

    expect((await finishQuickMatch(userId, dealt.matchId, play(dealt).record, T0 + 86_400_000)).capped).toBe(false)
  })
})
