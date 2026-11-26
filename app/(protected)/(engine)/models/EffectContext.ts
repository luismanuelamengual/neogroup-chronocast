import type { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import type { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import type { MatchEngine } from '@/app/(protected)/(engine)/utils/engine'

/**
 * What the logic of a card receives: who owns it, the card itself, the targets
 * chosen when it was programmed and the engine to act on the match (through
 * the helpers of (engine)/effects).
 */
export interface EffectContext {
  engine: MatchEngine
  owner: PlayerId
  opponent: PlayerId
  /** The card whose logic runs (`uid` is the ally's on the board, or the card's). */
  self: { uid: number; cardId: string }
  targets: SlotRef[]
  /** The card chosen when it was programmed (an ability with `choice`). */
  choice?: string
  /**
   * The logic of a spell is running (an ability of subtype `spell`, or a hero's ability that is one): its
   * damage adds the owner's spell power (docs/FACTIONS.md).
   */
  spell?: boolean
  /** Seeded random number in [0, 1): the same match always plays the same. */
  random(): number
}
