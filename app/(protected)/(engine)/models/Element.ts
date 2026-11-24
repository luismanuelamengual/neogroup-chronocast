/**
 * Elements of damage (docs/PLAN.md, section 3.5). A card without an element
 * deals physical damage. Each element adds one rule when its damage lands, and
 * allies can resist (half) or be vulnerable (double) to some of them.
 */
export const ELEMENTS = [
  /** Leaves the target burning 1 for 2 phases. */
  'fire',
  /** Double against a frozen target. */
  'ice',
  /** Half of it jumps to a random neighbor of the target ally. */
  'lightning',
  /** Goes past shields and armor. */
  'shadow',
  /** Heals the dealer's hero half of it; double against undead and horrors. */
  'light',
  /** Can't be healed back (the target loses max health); a hit of 3 or more makes a hero lose 1 Chronos. */
  'time',
  /** Poisons the target 1; against a hero its armor loses 1 more durability. */
  'acid',
  /** Can't be reduced: ignores resistances and damage reductions. */
  'arcane',
  /** Stuns an ally with 3 attack or less; flying allies are immune. */
  'earth',
  /** Reveals the target: it loses stealth. */
  'sonic',
  /** The target ally loses 1 attack for good. */
  'water',
  /** Double against flying allies. */
  'wind'
] as const

export type Element = (typeof ELEMENTS)[number]

/** Burn left by fire damage: amount per phase and phases. */
export const FIRE_BURN = 1
export const FIRE_BURN_PHASES = 2
/** Most attack an ally can have and still be stunned by earth damage. */
export const EARTH_STUN_MAX_ATTACK = 3
/** Least time damage in one hit that makes a hero lose a Chronos. */
export const TIME_DRAIN_MIN_DAMAGE = 3
