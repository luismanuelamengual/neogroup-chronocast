import { RARITIES, Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { PackSlot } from '@/app/(protected)/(shop)/data/packs'

/** The chances of a slot of a pack, from the most common rarity, in percent. */
export function slotOdds(slot: PackSlot): { rarity: Rarity; percent: number }[] {
  return RARITIES.filter((rarity) => (slot.odds[rarity] ?? 0) > 0).map((rarity) => ({
    rarity,
    percent: Math.round(slot.odds[rarity]! * 1000) / 10
  }))
}
