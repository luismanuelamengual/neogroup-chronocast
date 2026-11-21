import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

/**
 * Gold to unlock buying single cards of each rarity, once (docs/PLAN.md,
 * section 11.2). Common is open from the start; each one needs the previous.
 */
export const UNLOCK_COSTS: Record<Rarity, number> = {
  common: 0,
  uncommon: 1000,
  rare: 3000,
  epic: 8000,
  legendary: 20000,
  exotic: 50000,
  mythic: 100000
}

/**
 * Price of a playable hero in the shop, by its rarity: much more than any card
 * of the same rarity, since a hero opens a whole new way to play. Boss heroes
 * are never sold. Like the cards, its rarity must be unlocked first.
 */
export const HERO_PRICES: Record<Rarity, number> = {
  common: 5000,
  uncommon: 8000,
  rare: 12000,
  epic: 25000,
  legendary: 50000,
  exotic: 100000,
  mythic: 200000
}

/** A card sells for this share of its price, rounded (docs/PLAN.md, section 11.3). */
export const SELL_RATE = 0.15

/** Most copies of a card bought at once. */
export const MAX_BUY_COUNT = 10

/** From this rarity up, selling a card asks for confirmation. */
export const CONFIRM_SELL_FROM: Rarity = 'epic'
