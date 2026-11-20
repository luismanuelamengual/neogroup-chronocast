import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

/** Price range of a single card in the shop, by rarity (docs/PLAN.md, section 11.2). */
export const PRICE_RANGES: Record<Rarity, { min: number; max: number }> = {
  common: { min: 40, max: 80 },
  uncommon: { min: 140, max: 220 },
  rare: { min: 450, max: 750 },
  epic: { min: 1400, max: 2200 },
  legendary: { min: 4000, max: 6000 },
  exotic: { min: 10000, max: 14000 },
  mythic: { min: 25000, max: 35000 }
}
