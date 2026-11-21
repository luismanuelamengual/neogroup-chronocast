import { MAX_COPIES, MAX_UNIQUE_COPIES } from '@/app/(protected)/(engine)/data/rules'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { RARITIES, Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { getCard, hasCard } from '@/app/(protected)/(engine)/utils/registry'
import { CONFIRM_SELL_FROM, HERO_PRICES, SELL_RATE, UNLOCK_COSTS } from '@/app/(protected)/(shop)/data/prices'

/** Cards the shop sells: playable heroes and every card with a price, but campaign rewards and boss cards. */
export function isBuyable(card: CardDefinition): boolean {
  if (card.reward || card.boss) {
    return false
  }

  return card.type === 'hero' || card.price != null
}

/** Cards that can come in a pack: the buyable ones but heroes (they are only bought). */
export function isInPacks(card: CardDefinition): boolean {
  return isBuyable(card) && card.type !== 'hero'
}

/** Gold a copy of a card costs in the shop (heroes by their rarity, see HERO_PRICES). */
export function shopPrice(card: CardDefinition): number {
  return card.type === 'hero' ? HERO_PRICES[card.rarity] : (card.price ?? 0)
}

/** Cards a player can sell: everything with a price but heroes. */
export function isSellable(card: CardDefinition): boolean {
  return card.type !== 'hero' && !card.boss && card.price != null
}

/** Gold a copy of a card sells for: 15 % of its price, rounded. */
export function sellPrice(card: CardDefinition): number {
  return Math.round((card.price ?? 0) * SELL_RATE)
}

/** Selling it asks for confirmation: epic or better. */
export function isValuable(card: CardDefinition): boolean {
  return RARITIES.indexOf(card.rarity) >= RARITIES.indexOf(CONFIRM_SELL_FROM)
}

/** The rarities unlocked, in order: common plus the ones bought. */
export function unlockedRarities(bought: string[]): Rarity[] {
  const unlocked: Rarity[] = ['common']

  for (const rarity of RARITIES.slice(1)) {
    if (!bought.includes(rarity)) {
      break
    }

    unlocked.push(rarity)
  }

  return unlocked
}

/** The next rarity to unlock and its cost (null: all of them are open). */
export function nextUnlock(unlocked: Rarity[]): { rarity: Rarity; cost: number } | null {
  const rarity = RARITIES[unlocked.length]

  return rarity ? { rarity, cost: UNLOCK_COSTS[rarity] } : null
}

/** The most copies of a card worth having: 1 of a hero, 4 of a card (1 if it is unique). */
export function copyLimit(card: CardDefinition): number {
  if (card.type === 'hero') {
    return 1
  }

  return card.keywords?.includes('unique') ? MAX_UNIQUE_COPIES : MAX_COPIES
}

/**
 * The copies of a card that can be sold: the ones the active deck does not
 * hold (`used`: its copies in the active deck).
 */
export function sellableCopies(owned: number, used = 0): number {
  return Math.max(0, owned - used)
}

/**
 * Quick sell (docs/PLAN.md, section 11.3): every copy beyond the deck limit
 * of each card, but never one the active deck needs (`deckUsage`: its copies
 * of each card).
 */
export function quickSellPlan(
  collection: Record<string, number>,
  deckUsage: Record<string, number>
): { cards: Record<string, number>; gold: number } {
  const cards: Record<string, number> = {}
  let gold = 0

  for (const [cardId, owned] of Object.entries(collection)) {
    if (!hasCard(cardId) || !isSellable(getCard(cardId))) {
      continue
    }

    const card = getCard(cardId)
    const extra = owned - Math.max(copyLimit(card), deckUsage[cardId] ?? 0)

    if (extra > 0) {
      cards[cardId] = extra
      gold += extra * sellPrice(card)
    }
  }

  return { cards, gold }
}
