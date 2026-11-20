import { ABANDON_IDLE_PHASES } from '@/app/(protected)/(engine)/data/rules'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { opponentOf, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'

/** A player gives up (`surrender`) or is out for good (`abandon`): the rival wins. Pure. */
export function forfeit(state: MatchState, loser: PlayerId, reason: 'surrender' | 'abandon'): MatchState {
  if (state.status === 'finished') {
    return state
  }

  return { ...state, status: 'finished', result: { winner: opponentOf(loser), reason } }
}

/**
 * PvP (docs/PLAN.md, section 12.3): whoever programmed nothing in 3 phases in
 * a row loses by abandon; if both did, the match ends without a winner.
 */
export function checkAbandon(state: MatchState): MatchState {
  if (state.status === 'finished') {
    return state
  }

  const idleA = state.players.a.idlePhases >= ABANDON_IDLE_PHASES
  const idleB = state.players.b.idlePhases >= ABANDON_IDLE_PHASES

  if (idleA && idleB) {
    return { ...state, status: 'finished', result: { winner: null, reason: 'abandon' } }
  }

  return idleA ? forfeit(state, 'a', 'abandon') : idleB ? forfeit(state, 'b', 'abandon') : state
}
