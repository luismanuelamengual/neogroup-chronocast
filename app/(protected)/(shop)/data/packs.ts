import { Faction } from '@/app/(protected)/(engine)/models/Faction'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

/** Some cards of a pack: how many, and the chance of each rarity (they add up to 1). */
export interface PackSlot {
  count: number
  odds: Partial<Record<Rarity, number>>
}

/** A pack of the shop (docs/PLAN.md, section 11.1). Every pack has 8 cards. */
export interface PackDefinition {
  id: string
  price: number
  slots: PackSlot[]
  /** Faction packs: only cards of this faction and neutral ones. */
  faction?: Faction
  /** It counts for the guarantee of a legendary (see PITY_PACKS). */
  pity?: boolean
}

/** Every pack has this many cards. */
export const PACK_SIZE = 8

/** After this many guarantee packs in a row without a legendary, the next one brings one. */
export const PITY_PACKS = 10

/** Faction packs exist for every era (neutral cards come in all of them). */
export const PACK_FACTIONS: Faction[] = ['primal', 'bronze', 'arcane', 'clockwork', 'neon', 'void']

const CHRONICLER_SLOTS: PackSlot[] = [
  { count: 4, odds: { common: 1 } },
  { count: 3, odds: { uncommon: 1 } },
  { count: 1, odds: { rare: 0.8, epic: 0.16, legendary: 0.04 } }
]

export const PACKS: PackDefinition[] = [
  {
    id: 'traveler',
    price: 300,
    slots: [
      { count: 6, odds: { common: 1 } },
      { count: 1, odds: { uncommon: 1 } },
      { count: 1, odds: { uncommon: 0.9, rare: 0.1 } }
    ]
  },
  { id: 'chronicler', price: 800, slots: CHRONICLER_SLOTS },
  {
    id: 'guardian',
    price: 2000,
    pity: true,
    slots: [
      { count: 3, odds: { uncommon: 1 } },
      { count: 3, odds: { rare: 1 } },
      { count: 2, odds: { epic: 0.8, legendary: 0.17, exotic: 0.03 } }
    ]
  },
  {
    id: 'eternal',
    price: 5000,
    pity: true,
    slots: [
      { count: 2, odds: { rare: 1 } },
      { count: 3, odds: { epic: 1 } },
      { count: 2, odds: { legendary: 1 } },
      { count: 1, odds: { exotic: 0.85, mythic: 0.15 } }
    ]
  },
  ...PACK_FACTIONS.map((faction) => ({ id: `faction-${faction}`, price: 1000, faction, slots: CHRONICLER_SLOTS }))
]

export function findPack(id: string): PackDefinition | undefined {
  return PACKS.find((pack) => pack.id === id)
}
