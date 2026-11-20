import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'

/** What the player is doing on the battle screen while programming. */
export type Selection =
  /** A card of the hand, with the targets chosen so far. */
  | { kind: 'card'; uid: number; targets: SlotRef[] }
  /** One of the player's allies: attack an enemy slot or move to an own slot. */
  | { kind: 'ally'; uid: number }
  /** The player's hero: attack with the weapon, or aim the ability (`ability` set). */
  | { kind: 'hero'; ability: SlotRef[] | null }
  /** Just looking at a card (an enemy ally, a hero, an attachment...). */
  | { kind: 'inspect'; cardId: string }
