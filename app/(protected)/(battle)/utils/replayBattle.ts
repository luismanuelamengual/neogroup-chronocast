import type { BattleRecord } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { chooseTimeline } from '@/app/(protected)/(engine)/ai/chooseTimeline'
import { PHASE_LIMIT } from '@/app/(protected)/(engine)/data/rules'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { mulligan } from '@/app/(protected)/(engine)/utils/createMatch'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'

/**
 * Plays a match against the computer again from its record (docs/PLAN.md,
 * section 13.4): from the dealt state, the player's ("a") mulligan and
 * timelines, and the computer ("b") choosing its own with the same
 * deterministic AI as in the browser. Returns the final state, or null if the
 * record doesn't reach the end of the match. Campaign battles and quick
 * matches are verified with it.
 */
export function replayBattle(initial: MatchState, record: BattleRecord, aiLevel: number): MatchState | null {
  let state = mulligan(initial, 'a', record.mulligan)

  for (const timeline of record.timelines.slice(0, PHASE_LIMIT + 1)) {
    if (state.status !== 'planning') {
      break
    }

    state = resolvePhase(state, { a: timeline, b: chooseTimeline(state, 'b', aiLevel) }).state
  }

  return state.status === 'finished' ? state : null
}
