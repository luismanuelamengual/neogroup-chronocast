import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'

/** A place of the board: the hero of a player or one of its 5 ally slots (0 to 4). */
export type SlotIndex = 'hero' | number

export interface SlotRef {
  player: PlayerId
  slot: SlotIndex
}
