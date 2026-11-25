import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'

/** What the player is doing on the battle screen while programming. */
export type Selection =
  /** A card of the hand, with the targets chosen so far. */
  | { kind: 'card'; uid: number; targets: SlotRef[] }
  /** One of the player's allies: attack an enemy slot (`mode` attack), move to an own slot (`mode` move), or aim its ability (`ability` set). */
  | { kind: 'ally'; uid: number; mode?: 'attack' | 'move'; ability?: SlotRef[] }
  /** The player's hero: attack with the weapon, or aim the ability (`ability` set). */
  | { kind: 'hero'; ability: SlotRef[] | null }
  /** One of the player's artifacts in play: aim its ability, with the targets chosen so far. */
  | { kind: 'artifact'; uid: number; ability: SlotRef[] }
  /** Just looking at a card (an enemy ally, a hero, an attachment...). */
  | { kind: 'inspect'; cardId: string }
