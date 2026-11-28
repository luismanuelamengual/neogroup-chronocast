import { Collection } from '@/app/(protected)/(collection)/models/Collection'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

/** What the shop screen needs of a player; every purchase or sale returns it updated. */
export interface ShopState {
  gold: number
  collection: Collection
  /** The player's level: it opens the rarities of single cards (RARITY_LEVELS). */
  level: number
  /** Rarities open to buy single cards at that level, in order (common always). */
  unlocked: Rarity[]
  /** The guarantee counter: guardian/eternal packs in a row without a legendary. */
  packsWithoutLegendary: number
  /** The copies of each card the active deck holds: they cannot be sold. */
  deckUsage: Record<string, number>
  /** The card backs the player owns (the default one always), in the shop's order. */
  cardBacks: string[]
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
