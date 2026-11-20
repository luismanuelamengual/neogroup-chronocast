export const CARD_TYPES = ['hero', 'ally', 'ability', 'weapon', 'armor', 'item', 'location', 'trap'] as const

export type CardType = (typeof CARD_TYPES)[number]
