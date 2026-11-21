import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'

/** One of the 5 actions of a timeline (docs/PLAN.md, section 2.4). */
export type PlannedAction =
  | { kind: 'wait' }
  /** Discard a card of the hand for +1 Chronos capacity. */
  | { kind: 'sacrifice'; cardUid: number }
  /** Play a card of the hand (or of the discard pile, with `resurge`). Allies go to `slot`. */
  | { kind: 'play'; cardUid: number; slot?: number; targets?: SlotRef[] }
  | { kind: 'allyAttack'; allyUid: number; target: SlotRef }
  | { kind: 'heroAttack'; target: SlotRef }
  | { kind: 'heroAbility'; targets?: SlotRef[] }
  /** Use the ability of an ally (instead of attacking with it that phase). */
  | { kind: 'allyAbility'; allyUid: number; targets?: SlotRef[] }
  /** Move an ally to an empty slot, or swap it with the ally there (a neighbor; any with `agile`). */
  | { kind: 'move'; allyUid: number; toSlot: number }

export type Timeline = PlannedAction[]

export const WAIT: PlannedAction = { kind: 'wait' }

/** A timeline of 5 "wait". */
export function emptyTimeline(): Timeline {
  return [WAIT, WAIT, WAIT, WAIT, WAIT].map((action) => ({ ...action }))
}
