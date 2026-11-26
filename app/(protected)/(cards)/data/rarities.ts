import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

/** Price range of a single card in the shop, by rarity (docs/PLAN.md, section 11.2). */
export const PRICE_RANGES: Record<Rarity, { min: number; max: number }> = {
  common: { min: 40, max: 80 },
  uncommon: { min: 120, max: 220 },
  rare: { min: 300, max: 600 },
  epic: { min: 900, max: 1400 },
  legendary: { min: 2000, max: 2400 },
  exotic: { min: 3000, max: 3400 },
  mythic: { min: 4000, max: 4400 }
}
