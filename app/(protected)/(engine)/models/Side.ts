import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'

/**
 * The two sides of the Time Rift (like the Humans and the Shadows of Shadow
 * Era), above factions and classes: every hero belongs to one (its `side`),
 * and some cards are only for the heroes of one side (docs/PLAN.md, section
 * 4.1.1). The sides cut across factions: each faction has heroes of both.
 */
export const SIDES = ['dawn', 'eclipse'] as const

export type Side = (typeof SIDES)[number]

/** The side of a hero (null: any other card). */
export function sideOf(card: CardDefinition): Side | null {
  return card.side ?? null
}
