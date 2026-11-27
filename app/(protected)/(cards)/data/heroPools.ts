/**
 * How many cards each hero can use (docs/PLAN.md, section 4.3). Every hero
 * has between 260 and 300 cards available, split in three layers of about the
 * same size: neutral cards, cards of its side and cards of its faction.
 */
export const HERO_POOL_SIZE = { min: 260, max: 300 }

/** The layers of a hero's pool: who else can use those cards. */
export const POOL_LAYERS = ['neutral', 'side', 'faction'] as const

export type PoolLayer = (typeof POOL_LAYERS)[number]

/**
 * The size of each layer for every hero: about 100 neutral, 90 of its side
 * and 90 of its faction (its faction's shared cards, the ones of its faction
 * and side, and its signature cards).
 */
export const POOL_LAYER_SIZE: Record<PoolLayer, { min: number; max: number }> = {
  neutral: { min: 90, max: 110 },
  side: { min: 80, max: 100 },
  faction: { min: 80, max: 100 }
}

/**
 * The cards with no effect at all (no text and no ability) that are allowed:
 * a few plain cards of the Wanderers, the base of the game. Every other card
 * has an effect of its own (section 4.4).
 */
export const MAX_PLAIN_CARDS = 12
