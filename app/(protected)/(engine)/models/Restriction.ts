import { Faction } from '@/app/(protected)/(engine)/models/Faction'
import { Side } from '@/app/(protected)/(engine)/models/Side'

/**
 * Which heroes can have a card in their deck (docs/PLAN.md, section 4.2).
 * Each field is one criterion and lists the values it accepts: a hero passes
 * a criterion when it matches any of its values, and it can use the card when
 * it passes every criterion the card lists. `{}` is any hero.
 *
 * - `{ factions: ['clockwork'] }`: the Clockwork heroes.
 * - `{ factions: ['clockwork', 'neon'] }`: the Clockwork or Neon heroes.
 * - `{ sides: ['eclipse'] }`: the heroes of the Eclipse.
 * - `{ factions: ['clockwork'], sides: ['dawn'] }`: the Clockwork heroes of the Dawn.
 * - `{ heroes: ['ada-copperwick'] }`: only Ada (her signature cards).
 */
export interface Restriction {
  factions?: Faction[]
  /** Dawn or Eclipse. */
  sides?: Side[]
  /** Hero ids. */
  heroes?: string[]
}

/** The criteria of a restriction, in the order they are shown. */
export const RESTRICTION_CRITERIA = ['heroes', 'factions', 'sides'] as const

export type RestrictionCriterion = (typeof RESTRICTION_CRITERIA)[number]

/** The criteria a restriction actually uses (the ones with at least one value). */
export function restrictionCriteria(restriction: Restriction): RestrictionCriterion[] {
  return RESTRICTION_CRITERIA.filter((criterion) => (restriction[criterion]?.length ?? 0) > 0)
}

/** Whether a restriction lets any hero use the card. */
export function isUnrestricted(restriction: Restriction): boolean {
  return restrictionCriteria(restriction).length === 0
}
