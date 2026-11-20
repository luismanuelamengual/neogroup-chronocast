import { Collection } from '@/app/(protected)/(collection)/models/Collection'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

/** What the shop screen needs of a player; every purchase or sale returns it updated. */
export interface ShopState {
  gold: number
  collection: Collection
  /** Rarities open to buy single cards, in order (common always). */
  unlocked: Rarity[]
  /** The guarantee counter: guardian/eternal packs in a row without a legendary. */
  packsWithoutLegendary: number
  /** The most copies of each card that any saved deck holds (selling those asks first; quick sell keeps them). */
  deckUsage: Record<string, number>
}

export interface PackPurchase {
  state: ShopState
  cards: string[]
  /** The guarantee gave this pack its legendary. */
  guaranteed: boolean
}

export interface Sale {
  state: ShopState
  cards: Record<string, number>
  gold: number
}
