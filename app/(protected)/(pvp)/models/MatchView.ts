import { MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { ResolutionFrame } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { LevelGain } from '@/app/(protected)/(progression)/models/LevelGain'

export type MatchVisibility = 'public' | 'private'
export type MatchStatus = 'waiting' | 'playing' | 'finished' | 'abandoned' | 'closed'

/** The resolution of a phase, saved to animate it on both screens. */
export interface Resolution {
  /** The phase resolved. */
  phase: number
  frames: ResolutionFrame[]
  events: MatchEvent[]
  timelines: Record<PlayerId, Timeline>
  /** The cards of the hands that the timelines played or sacrificed (uid → card), now public. */
  revealed: Record<number, string>
}

/** What a match brought to a player: rating (public matches) and gold. */
export interface PlayerReward {
  ratingDelta: number
  rating: number
  gold: number
  firstWin: boolean
  /** XP earned (docs/PLAN.md, section 10.4). */
  xp: number
  /** Where the XP left the player: its level and the gold of the levels gained (null: not applied yet). */
  level: LevelGain | null
}

export interface SeatInfo {
  name: string
  rating: number
  heroId: string
  /** The back of its deck's cards (data/cardBacks.ts). */
  cardBack: string
}

/**
 * A match as one player sees it: never the rival's hand, deck, face-down traps
 * nor timeline before the resolution (docs/PLAN.md, section 12.2).
 */
export interface MatchView {
  id: number
  version: number
  status: MatchStatus
  visibility: MatchVisibility
  /** Private rooms: the code to share. */
  code: string | null
  me: PlayerId
  you: SeatInfo
  /** Null while waiting for a rival. */
  rival: SeatInfo | null
  stage: 'waiting' | 'mulligan' | 'planning' | 'over'
  state: MatchState | null
  /** Milliseconds left to the deadline of the stage (the room's expiry while waiting). */
  deadlineIn: number
  /** The player already sent its timeline (or its mulligan) for this stage. */
  submitted: boolean
  rivalReady: boolean
  /** The last phase resolved, redacted for this player. */
  resolution: Resolution | null
  reward: PlayerReward | null
}

/** Where the matchmaking of a player stands: still looking (ms left, the Prestige window now), the match found, or over. */
export type SearchStatus =
  { status: 'searching'; expiresIn: number; window: number } | { status: 'found'; id: number } | { status: 'timeout' }
