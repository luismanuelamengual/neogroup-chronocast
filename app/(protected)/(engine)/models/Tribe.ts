/**
 * Tribes: families of allies that power each other up (docs/PLAN.md, section 3.4).
 * Each faction has three and the Wanderers (`neutral`) two; cards of any
 * faction can care about a tribe.
 */
export const TRIBES = [
  // primal
  'saurian',
  'caveborn',
  'beast',
  // bronze
  'legionnaire',
  'oracle',
  'colossus',
  // arcane
  'magus',
  'fae',
  'drake',
  // clockwork
  'automaton',
  'inventor',
  'skyship',
  // neon
  'cyborg',
  'netrunner',
  'enforcer',
  // void
  'undead',
  'cultist',
  'horror',
  // neutral
  'drifter',
  'elemental'
] as const

export type Tribe = (typeof TRIBES)[number]
