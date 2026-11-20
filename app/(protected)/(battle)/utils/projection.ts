import { ACTIONS_PER_PHASE } from '@/app/(protected)/(engine)/data/rules'
import { FailReason } from '@/app/(protected)/(engine)/models/MatchEvent'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { PlannedAction, Timeline, WAIT } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { projectTimeline } from '@/app/(protected)/(engine)/utils/projectTimeline'

export interface StepProjection {
  /** Chronos left after the step. */
  chronos: number
  /** Why the action of the step would fail even if the rival did nothing (null: it works). */
  failure: FailReason | null
}

export interface PlanProjection {
  steps: StepProjection[]
  /** The board after the last step, before the phase ends. */
  board: MatchState
}

/** The programmed actions followed by "wait" up to 5. */
export function padTimeline(actions: PlannedAction[]): Timeline {
  return [...actions, ...Array.from({ length: ACTIONS_PER_PHASE - actions.length }, () => WAIT)].slice(
    0,
    ACTIONS_PER_PHASE
  )
}

/**
 * The live projection of the battle screen (docs/PLAN.md, section 2.4): plays
 * the programmed actions with the rival doing nothing and tells the Chronos
 * left at each step, which actions would fail, and how the board would look.
 */
export function projectPlan(state: MatchState, player: PlayerId, actions: PlannedAction[]): PlanProjection {
  const { failures, frames } = projectTimeline(state, player, padTimeline(actions), true)
  const stepFrames = frames.filter((frame) => frame.step >= 0)
  const after = (step: number) => stepFrames.filter((frame) => frame.step <= step).at(-1)?.state ?? state

  return {
    steps: Array.from({ length: ACTIONS_PER_PHASE }, (_, step) => ({
      chronos: after(step).players[player].chronos,
      failure: failures.find((failure) => failure.step === step)?.reason ?? null
    })),
    board: stepFrames.at(-1)?.state ?? state
  }
}

/** The uids of the hand cards the actions use (played or turned into Chronos). */
export function usedCards(actions: PlannedAction[]): Set<number> {
  return new Set(
    actions.flatMap((action) => (action.kind === 'play' || action.kind === 'sacrifice' ? [action.cardUid] : []))
  )
}
