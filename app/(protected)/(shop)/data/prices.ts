import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

/**
 * Price of a playable hero in the shop, by its rarity: a hero opens a whole
 * new way to play. Today there are only common, rare, epic and legendary
 * heroes; the other rarities keep a price in between for when there are.
 * Boss heroes are never sold. Like the cards, its rarity opens with the
 * player's level (RARITY_LEVELS).
 */
export const HERO_PRICES: Record<Rarity, number> = {
  common: 900,
  uncommon: 1000,
  rare: 1200,
  epic: 1500,
  legendary: 2800,
  exotic: 3800,
  mythic: 4800
}

/** A card sells for this share of its price, rounded (docs/PLAN.md, section 11.3). */
export const SELL_RATE = 0.3

/** Most copies of a card bought at once. */
export const MAX_BUY_COUNT = 10

/** From this rarity up, selling a card asks for confirmation. */
export const CONFIRM_SELL_FROM: Rarity = 'epic'
