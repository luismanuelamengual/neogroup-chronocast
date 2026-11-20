/** Rarities, from the most common to the rarest. */
export const RARITIES = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'exotic', 'mythic'] as const

export type Rarity = (typeof RARITIES)[number]
