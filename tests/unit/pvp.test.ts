import '@/app/(protected)/(cards)/utils/catalog'
import { describe, expect, it } from 'vitest'
import { starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { checkAbandon, forfeit } from '@/app/(protected)/(engine)/utils/endMatch'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { leagueOf } from '@/app/(protected)/(pvp)/data/leagues'
import { advance, revealedCards } from '@/app/(protected)/(pvp)/utils/advance'
import { HIDDEN_CARD, redactState } from '@/app/(protected)/(pvp)/utils/redact'
import { dayStart, matchRewards, winBonus } from '@/app/(protected)/(pvp)/utils/rewards'
import { sanitizeTimeline } from '@/app/(protected)/(pvp)/utils/sanitizeTimeline'

function match(): MatchState {
  const { state } = createMatch({ seed: 7, decks: { a: starterDeck('legate-varro'), b: starterDeck('kora-wildfang') } })

  return {
    ...state,
    players: { a: { ...state.players.a, mulliganDone: true }, b: { ...state.players.b, mulliganDone: true } }
  }
}

describe('hidden information', () => {
  it('hides the rival hand, traps and both decks, and the random generator', () => {
    const state = match()
    const view = redactState(state, 'b')

    expect(view.players.a.hand.every((card) => card.cardId === HIDDEN_CARD)).toBe(true)
    expect(view.players.a.hand.map((card) => card.uid)).toEqual(state.players.a.hand.map((card) => card.uid))
    expect(view.players.b.hand).toEqual(state.players.b.hand)
    expect(view.players.b.deck).toHaveLength(state.players.b.deck.length)
    expect(view.players.b.deck.every((card) => card.cardId === HIDDEN_CARD)).toBe(true)
    expect(view.rng).toBe(0)
    expect(state.players.a.hand[0].cardId).not.toBe(HIDDEN_CARD)
    expect(getCard(HIDDEN_CARD).name).toBe('?')
  })

  it('reveals only the cards that left the hand', () => {
    const before = match()
    const [played, kept] = before.players.a.hand
    const after = {
      ...before,
      players: { ...before.players, a: { ...before.players.a, hand: before.players.a.hand.slice(1) } }
    }
    const timelines = {
      a: [
        { kind: 'sacrifice' as const, cardUid: played.uid },
        { kind: 'play' as const, cardUid: kept.uid }
      ],
      b: emptyTimeline()
    }

    expect(revealedCards(before, after, timelines)).toEqual({ [played.uid]: played.cardId })
  })
})

describe('timelines from the client', () => {
  it('keeps only well-formed actions and pads with wait', () => {
    expect(
      sanitizeTimeline([
        { kind: 'play', cardUid: 3, slot: 1, extra: 'x' },
        { kind: 'heroAttack', target: { player: 'b', slot: 'hero' } }
      ])
    ).toEqual([
      { kind: 'play', cardUid: 3, slot: 1 },
      { kind: 'heroAttack', target: { player: 'b', slot: 'hero' } },
      { kind: 'wait' },
      { kind: 'wait' },
      { kind: 'wait' }
    ])
  })

  it('rejects anything else', () => {
    for (const bad of [
      null,
      {},
      [{ kind: 'x' }],
      [{ kind: 'move', allyUid: 1, toSlot: 9 }],
      [{ kind: 'allyAttack', allyUid: 1, target: { player: 'c', slot: 0 } }]
    ]) {
      expect(() => sanitizeTimeline(bad)).toThrow()
    }
  })
})

describe('the end of a match', () => {
  it('a surrender gives the win to the rival', () => {
    expect(forfeit(match(), 'a', 'surrender').result).toEqual({ winner: 'b', reason: 'surrender' })
  })

  it('3 idle phases lose by abandon; both idle, nobody wins', () => {
    const state = match()
    const idle = (a: number, b: number): MatchState => ({
      ...state,
      players: { a: { ...state.players.a, idlePhases: a }, b: { ...state.players.b, idlePhases: b } }
    })

    expect(checkAbandon(idle(2, 2)).status).toBe('planning')
    expect(checkAbandon(idle(3, 0)).result).toEqual({ winner: 'b', reason: 'abandon' })
    expect(checkAbandon(idle(3, 3)).result).toEqual({ winner: null, reason: 'abandon' })
  })

  it('advances only when both timelines are in or the deadline passed', () => {
    const progress = {
      status: 'playing' as const,
      state: match(),
      planA: null,
      planB: null,
      lastResolution: null,
      phaseDeadline: 10_000
    }

    expect(advance(progress, 5000)).toBeNull()
    expect(advance({ ...progress, planA: emptyTimeline() }, 5000)).toBeNull()

    const resolved = advance({ ...progress, planA: emptyTimeline(), planB: emptyTimeline() }, 5000)!

    expect(resolved.state!.phase).toBe(2)
    expect(resolved.lastResolution!.phase).toBe(1)
    expect(resolved.phaseDeadline).toBeGreaterThan(5000 + 90_000)
    expect(advance(progress, 60_000)!.state!.players.a.idlePhases).toBe(1)
  })
})

describe('rewards', () => {
  const base = { ratings: { a: 1200, b: 1200 }, firstWinToday: { a: true, b: true } }

  it('a public win pays 40, the bonus against a higher rating and the first win of the day', () => {
    const rewards = matchRewards({ ...base, visibility: 'public', result: { winner: 'a', reason: 'hero' } })

    expect(rewards.a).toEqual({ ratingDelta: 15, rating: 1215, gold: 140, firstWin: true })
    expect(rewards.b).toEqual({ ratingDelta: -15, rating: 1185, gold: 5, firstWin: false })
    expect(winBonus(1200, 1600)).toBe(20)
    expect(winBonus(1200, 1400)).toBe(10)
    expect(winBonus(1400, 1200)).toBe(0)
  })

  it('a draw pays 15; whoever quits gets nothing', () => {
    const draw = matchRewards({ ...base, visibility: 'public', result: { winner: null, reason: 'phaseLimit' } })
    const quit = matchRewards({ ...base, visibility: 'public', result: { winner: 'a', reason: 'abandon' } })

    expect(draw.a).toMatchObject({ gold: 15, ratingDelta: 0 })
    expect(quit.b).toMatchObject({ gold: 0, ratingDelta: -15 })
  })

  it('private matches pay half, keep the rating and stop paying at the daily cap', () => {
    const result = { winner: 'a' as const, reason: 'hero' as const }

    expect(matchRewards({ ...base, visibility: 'private', result }).a).toEqual({
      ratingDelta: 0,
      rating: 1200,
      gold: 20,
      firstWin: false
    })
    expect(matchRewards({ ...base, visibility: 'private', result, privateCapReached: true }).a.gold).toBe(0)
  })

  it('days and leagues', () => {
    expect(dayStart(Date.UTC(2026, 0, 2, 15))).toBe(Date.UTC(2026, 0, 2))
    expect(leagueOf(1000)).toBe('apprentice')
    expect(leagueOf(1200)).toBe('traveler')
    expect(leagueOf(1300)).toBe('chronicler')
    expect(leagueOf(1950)).toBe('eternal')
  })
})
