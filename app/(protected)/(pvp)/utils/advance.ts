import { resolutionMs } from '@/app/(protected)/(battle)/data/timing'
import { PLANNING_SECONDS } from '@/app/(protected)/(engine)/data/rules'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { checkAbandon } from '@/app/(protected)/(engine)/utils/endMatch'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { DEADLINE_GRACE_MS } from '@/app/(protected)/(pvp)/data/pvp'
import { MatchStatus, Resolution } from '@/app/(protected)/(pvp)/models/MatchView'

/** The part of a match that moves as it is played. */
export interface MatchProgress {
  status: MatchStatus
  state: MatchState | null
  planA: Timeline | null
  planB: Timeline | null
  lastResolution: Resolution | null
  phaseDeadline: number | null
}

/**
 * The cards the timelines took from a hand (played or sacrificed): once the
 * phase resolved they are public, so both screens can name them in the
 * timelines. A card that stayed in the hand (its action failed) stays secret.
 */
export function revealedCards(
  before: MatchState,
  after: MatchState,
  timelines: Record<PlayerId, Timeline>
): Record<number, string> {
  const revealed: Record<number, string> = {}

  for (const player of ['a', 'b'] as PlayerId[]) {
    for (const action of timelines[player]) {
      if (action.kind !== 'play' && action.kind !== 'sacrifice') {
        continue
      }

      const card = before.players[player].hand.find((candidate) => candidate.uid === action.cardUid)
      const kept = after.players[player].hand.some((candidate) => candidate.uid === action.cardUid)

      if (card && !kept) {
        revealed[card.uid] = card.cardId
      }
    }
  }

  return revealed
}

/** Status of a match whose engine state just finished: without a winner because both left, it was abandoned. */
export function finishedStatus(state: MatchState): MatchStatus {
  return state.result?.winner == null && state.result?.reason === 'abandon' ? 'abandoned' : 'finished'
}

export function inMulligan(state: MatchState): boolean {
  return !state.players.a.mulliganDone || !state.players.b.mulliganDone
}

/**
 * The next step of a match, if one is due (docs/PLAN.md, section 12.2): there
 * is no server always on, so a match moves when a request finds that both
 * timelines are in, or that the deadline passed. Then the mulligans still
 * pending are skipped, or the phase resolves with "wait" for whoever sent
 * nothing (3 phases like that lose by abandon). Pure: null when nothing is due.
 */
export function advance(match: MatchProgress, now: number): MatchProgress | null {
  const { state } = match

  if (match.status !== 'playing' || !state) {
    return null
  }

  const expired = match.phaseDeadline != null && now > match.phaseDeadline + DEADLINE_GRACE_MS

  if (inMulligan(state)) {
    if (!expired) {
      return null
    }

    const players = {
      a: { ...state.players.a, mulliganDone: true },
      b: { ...state.players.b, mulliganDone: true }
    }

    return { ...match, state: { ...state, players }, phaseDeadline: now + PLANNING_SECONDS * 1000 }
  }

  if (!(match.planA && match.planB) && !expired) {
    return null
  }

  const timelines = { a: match.planA ?? emptyTimeline(), b: match.planB ?? emptyTimeline() }
  const resolved = resolvePhase(state, timelines, { frames: true })
  const next = checkAbandon(resolved.state)
  const over = next.status === 'finished'

  return {
    status: over ? finishedStatus(next) : 'playing',
    state: next,
    planA: null,
    planB: null,
    lastResolution: {
      phase: state.phase,
      frames: resolved.frames,
      events: resolved.events,
      timelines,
      revealed: revealedCards(state, next, timelines)
    },
    phaseDeadline: over ? null : now + resolutionMs(resolved.frames) + PLANNING_SECONDS * 1000
  }
}
