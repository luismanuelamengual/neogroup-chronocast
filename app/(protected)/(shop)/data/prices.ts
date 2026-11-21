import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

/**
 * Gold to unlock buying single cards of each rarity, once (docs/PLAN.md,
 * section 11.2). Common is open from the start; each one needs the previous.
 */
export const UNLOCK_COSTS: Record<Rarity, number> = {
  common: 0,
  uncommon: 1000,
  rare: 2000,
  epic: 5000,
  legendary: 10000,
  exotic: 20000,
  mythic: 40000
}

/**
 * Price of a playable hero in the shop, by its rarity: more than a card of the
 * same rarity, since a hero opens a whole new way to play. Boss heroes
 * are never sold. Like the cards, its rarity must be unlocked first.
 */
export const HERO_PRICES: Record<Rarity, number> = {
  common: 2000,
  uncommon: 2500,
  rare: 3000,
  epic: 5000,
  legendary: 8000,
  exotic: 12000,
  mythic: 20000
}

/** A card sells for this share of its price, rounded (docs/PLAN.md, section 11.3). */
export const SELL_RATE = 0.15

/** Most copies of a card bought at once. */
export const MAX_BUY_COUNT = 10

/** From this rarity up, selling a card asks for confirmation. */
export const CONFIRM_SELL_FROM: Rarity = 'epic'
