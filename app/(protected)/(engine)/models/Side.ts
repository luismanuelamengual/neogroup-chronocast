import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'

/**
 * The two sides of the Time Rift (like the Humans and the Shadows of Shadow
 * Era), above factions: every hero belongs to one (its `side`), and every
 * other card is of the Dawn, of the Eclipse (`{ sides: [...] }` in its
 * restriction) or neutral (docs/PLAN.md, section 4.1.1). The sides cut across
 * factions: each faction has one hero of each.
 */
export const SIDES = ['dawn', 'eclipse'] as const

export type Side = (typeof SIDES)[number]

/** The side of a card: a hero's own, or the one its restriction asks for (null: neutral). */
export function sideOf(card: CardDefinition): Side | null {
  const sides = card.restriction.sides ?? []

  return card.side ?? (sides.length === 1 ? sides[0] : null)
}
