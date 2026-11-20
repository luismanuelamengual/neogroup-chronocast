import { FailReason, MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { opponentOf, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { ResolutionFrame, resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'

export interface Projection {
  /** The steps whose action would fail even if the rival did nothing, and why. */
  failures: { step: number; reason: FailReason }[]
  state: MatchState
  events: MatchEvent[]
  /** Snapshots after each speed bracket (only when asked for). */
  frames: ResolutionFrame[]
}

/**
 * Plays a timeline assuming the rival does nothing (docs/PLAN.md, section
 * 2.4): the battle screen shows the Chronos left at each step and refuses what
 * would fail anyway, and the computer player uses it to build its timelines.
 * The rival's traps are left out: they are face down.
 */
export function projectTimeline(
  state: MatchState,
  player: PlayerId,
  timeline: Timeline,
  withFrames = false
): Projection {
  const rival = opponentOf(player)
  const timelines = { [player]: timeline, [rival]: emptyTimeline() } as Record<PlayerId, Timeline>
  // The rival's face-down traps are hidden: the projection can't know about them.
  const visible = { ...state, players: { ...state.players, [rival]: { ...state.players[rival], traps: [] } } }
  const { state: projected, events, frames } = resolvePhase(visible, timelines, { frames: withFrames })
  const failures = events.flatMap((event) =>
    event.type === 'fail' && event.player === player ? [{ step: event.step, reason: event.reason }] : []
  )

  return { failures, state: projected, events, frames }
}
