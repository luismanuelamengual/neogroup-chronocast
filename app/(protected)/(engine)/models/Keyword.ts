/** Keywords: rules shared by many cards (docs/PLAN.md, section 3.2). */
export const KEYWORDS = [
  /** Attacks aimed at the hero hit it instead. */
  'guardian',
  /** Its attacks are fast. */
  'quick',
  /** Can attack from the step after it enters, without waiting for the next phase. */
  'charge',
  /** Takes no counterattack. */
  'ranged',
  /** Can swap places with any ally, not only a neighbor. */
  'agile',
  /** Only allies with flying or ranged can attack it. */
  'flying',
  /** Can't be targeted until it attacks. */
  'stealth',
  /** Can attack twice per phase. */
  'frenzy',
  /** The damage it deals to an ally destroys it. */
  'poison',
  /** Heals its hero as much as the damage it deals. */
  'lifesteal',
  /** Ignores the first damage it takes. */
  'shield',
  /** Whoever attacks it takes `thorns` damage. */
  'thorns',
  /** Its attack also hits the neighboring slots. */
  'cleave',
  /** Only 1 copy per deck. */
  'unique',
  /** Goes back to the hand the first time it dies. */
  'echo',
  /** Can be played from the discard pile. */
  'resurge'
] as const

export type Keyword = (typeof KEYWORDS)[number]
