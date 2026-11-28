import type { MessageKey } from '@/app/i18n/messages'

/**
 * The card backs (art/card-backs.md): `default` is everyone's, for free; the
 * rest are sold in the shop by tier, the pricier the more elaborate. Each id is
 * its image's name in public/backs/ and public/backs/manifest.json (`yarn art`,
 * from art/source/backs/).
 */
export type CardBackTier = 'default' | 'era' | 'rare' | 'epic' | 'legendary'

export interface CardBack {
  id: string
  tier: CardBackTier
  /** Gold it costs in the shop (0: the default one, never sold). */
  price: number
}

/** Gold of a card back of each tier. */
export const CARD_BACK_PRICES: Record<CardBackTier, number> = {
  default: 0,
  era: 800,
  rare: 2000,
  epic: 5000,
  legendary: 10000
}

/** The card back of every player until they pick another one. */
export const DEFAULT_CARD_BACK = 'default'

const TIERS: [CardBackTier, string[]][] = [
  ['default', [DEFAULT_CARD_BACK]],
  ['era', ['primal', 'bronze', 'arcane', 'clockwork', 'neon', 'void']],
  ['rare', ['pocket-watch', 'time-rift']],
  ['epic', ['astrolabe', 'eon-dragon']],
  ['legendary', ['throne-of-time', 'end-of-eras']]
]

export const CARD_BACKS: CardBack[] = TIERS.flatMap(([tier, ids]) =>
  ids.map((id) => ({ id, tier, price: CARD_BACK_PRICES[tier] }))
)

export function findCardBack(id: string): CardBack | undefined {
  return CARD_BACKS.find((back) => back.id === id)
}

/** The i18n key of a card back's name. */
export function cardBackNameKey(id: string): MessageKey {
  return `shop.backs.names.${id}` as MessageKey
}
