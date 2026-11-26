import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'

/** A place of the board: the hero of a player or one of its 5 ally slots (0 to 4). */
export type SlotIndex = 'hero' | number

export interface SlotRef {
  player: PlayerId
  slot: SlotIndex
  /**
   * A card attached to that place (its uid): the hero's weapon or armor, or a
   * card attached to the ally; with the hero, also an artifact or a trap of
   * that player. Only the target kinds that aim at an attached or support
   * card set it (`enemyGear`, `enemyAttachment`, `enemyArtifact`, `friendlyArtifact`).
   */
  attached?: number
}
