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

/** A card sells for this share of its price, rounded (docs/PLAN.md, section 11.3). */
export const SELL_RATE = 0.15

/** Most copies of a card bought at once. */
export const MAX_BUY_COUNT = 10

/** From this rarity up, selling a card asks for confirmation. */
export const CONFIRM_SELL_FROM: Rarity = 'epic'
