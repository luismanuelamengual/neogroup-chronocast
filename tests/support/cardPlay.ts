import '@/app/(protected)/(cards)/utils/catalog'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { give, testMatch, timeline } from '@/tests/support/testCards'

/**
 * Helpers to try the real cards of the catalog (tests/unit/*Cards.test.ts):
 * a test match with empty hands, and playing a card with Chronos to spare.
 */
export function match(): MatchState {
  const state = testMatch()

  state.players.a.hand = []
  state.players.b.hand = []

  return state
}

export function run(state: MatchState, a: Timeline = emptyTimeline(), b: Timeline = emptyTimeline()) {
  return resolvePhase(state, { a, b })
}

/** A player plays a card of its hand this phase (the other one waits). */
export function play(state: MatchState, cardUid: number, targets: SlotRef[] = [], player: PlayerId = 'a'): MatchState {
  state.players[player].chronos = 10

  const plan = timeline({ kind: 'play', cardUid, targets })

  return player === 'a' ? run(state, plan).state : run(state, emptyTimeline(), plan).state
}

/** A player gets a card and plays it this phase. */
export function playCard(
  state: MatchState,
  cardId: string,
  targets: SlotRef[] = [],
  player: PlayerId = 'a'
): MatchState {
  return play(state, give(state, player, cardId).uid, targets, player)
}

/** Puts cards in the discard pile of a player. */
export function fillDiscard(state: MatchState, player: PlayerId, cardId: string, count: number): void {
  for (let index = 0; index < count; index++) {
    state.players[player].discard.push({ uid: state.nextUid++, cardId })
  }
}
