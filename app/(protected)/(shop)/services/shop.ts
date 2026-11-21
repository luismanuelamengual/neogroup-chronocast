import '@/app/(protected)/(cards)/utils/catalog'
import { DB } from '@neogroup/neorm'
import { addCards, getCollection } from '@/app/(protected)/(collection)/services/collection'
import { getActiveDeck } from '@/app/(protected)/(collection)/services/decks'
import { RARITIES, Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { getCard, hasCard } from '@/app/(protected)/(engine)/utils/registry'
import { MAX_BUY_COUNT } from '@/app/(protected)/(shop)/data/prices'
import { Sale, ShopState } from '@/app/(protected)/(shop)/models/ShopState'
import {
  isBuyable,
  isSellable,
  nextUnlock,
  quickSellPlan,
  sellableCopies,
  sellPrice,
  unlockedRarities
} from '@/app/(protected)/(shop)/utils/prices'
import { ApiException } from '@/app/models/ApiException'
import { column } from '@/app/utils/rows'

async function userRow(userId: number): Promise<Record<string, unknown>> {
  const row = await DB.table('users').where('id', userId).first()

  if (!row) {
    throw new ApiException('errors.notAuthenticated', 401)
  }

  return row
}

/** Takes gold from a player, inside the caller's transaction (never below 0). */
export async function spendGold(userId: number, amount: number): Promise<void> {
  const gold = Number((await userRow(userId)).gold ?? 0)

  if (gold < amount) {
    throw new ApiException('errors.notEnoughGold', 400, { price: amount, gold })
  }

  await DB.table('users')
    .where('id', userId)
    .update({ gold: gold - amount })
}

/** Gives gold to a player, inside the caller's transaction. */
export async function earnGold(userId: number, amount: number): Promise<void> {
  const gold = Number((await userRow(userId)).gold ?? 0)

  await DB.table('users')
    .where('id', userId)
    .update({ gold: gold + amount })
}

/** The rarities a player can buy single cards of. */
export async function getUnlocked(userId: number): Promise<Rarity[]> {
  const rows = await DB.table('shop_unlocks').where('userId', userId).get()

  return unlockedRarities(rows.map((row) => String(row.rarity)))
}

/** The copies of each card the active deck holds (hero included): selling never takes those. */
export async function getDeckUsage(userId: number): Promise<Record<string, number>> {
  const deck = await getActiveDeck(userId)

  return deck ? { ...deck.cards, [deck.heroId]: 1 } : {}
}

export async function getShopState(userId: number): Promise<ShopState> {
  const [user, collection, unlocked, deckUsage] = await Promise.all([
    userRow(userId),
    getCollection(userId),
    getUnlocked(userId),
    getDeckUsage(userId)
  ])

  return {
    gold: Number(user.gold ?? 0),
    collection,
    unlocked,
    packsWithoutLegendary: Number(column(user, 'packsWithoutLegendary') ?? 0),
    deckUsage
  }
}

/** Unlocks the next rarity of single cards (each one needs the previous). */
export async function unlockRarity(userId: number, rarity: Rarity): Promise<ShopState> {
  if (!RARITIES.includes(rarity)) {
    throw new ApiException('errors.invalidRarity')
  }

  await DB.transaction(async () => {
    const unlocked = await getUnlocked(userId)

    if (unlocked.includes(rarity)) {
      throw new ApiException('errors.rarityAlreadyUnlocked')
    }

    const next = nextUnlock(unlocked)

    if (!next || next.rarity !== rarity) {
      throw new ApiException('errors.previousRarityLocked')
    }

    await spendGold(userId, next.cost)
    await DB.table('shop_unlocks').insert({ userId, rarity })
  })

  return getShopState(userId)
}

function checkCount(count: unknown, max: number): number {
  const value = Number(count)

  if (!Number.isInteger(value) || value < 1 || value > max) {
    throw new ApiException('errors.invalidCount')
  }

  return value
}

/** Buys copies of a single card at its own price: its rarity must be unlocked. */
export async function buyCard(userId: number, cardId: string, count: number = 1): Promise<ShopState> {
  const copies = checkCount(count, MAX_BUY_COUNT)

  if (!hasCard(cardId) || !isBuyable(getCard(cardId))) {
    throw new ApiException('errors.cardNotForSale')
  }

  const card = getCard(cardId)

  await DB.transaction(async () => {
    if (!(await getUnlocked(userId)).includes(card.rarity)) {
      throw new ApiException('errors.rarityLocked')
    }

    await spendGold(userId, card.price! * copies)
    await addCards(userId, { [cardId]: copies })
  })

  return getShopState(userId)
}

/** Removes copies from a collection and pays 15 % of their price, inside a transaction. */
async function sell(userId: number, cards: Record<string, number>): Promise<number> {
  const collection = await getCollection(userId)
  const deckUsage = await getDeckUsage(userId)
  let gold = 0

  for (const [cardId, count] of Object.entries(cards)) {
    if (!hasCard(cardId) || !isSellable(getCard(cardId))) {
      throw new ApiException('errors.cardNotSellable')
    }

    if ((collection[cardId] ?? 0) < count) {
      throw new ApiException('errors.notEnoughCopies', 400, { card: getCard(cardId).name })
    }

    if (count > sellableCopies(collection[cardId], deckUsage[cardId])) {
      throw new ApiException('errors.cardInDeck', 400, { card: getCard(cardId).name })
    }

    gold += sellPrice(getCard(cardId)) * count
    await DB.table('user_cards')
      .where('userId', userId)
      .where('cardId', cardId)
      .update({ quantity: collection[cardId] - count })
  }

  await earnGold(userId, gold)

  return gold
}

/**
 * Sells copies of cards, never one the active deck holds: only the spare ones,
 * so that the active deck stays playable (docs/PLAN.md, section 11.3).
 */
export async function sellCards(userId: number, input: Record<string, number>): Promise<Sale> {
  const cards: Record<string, number> = {}

  for (const [cardId, count] of Object.entries(input ?? {})) {
    cards[cardId] = checkCount(count, Number.MAX_SAFE_INTEGER)
  }

  if (Object.keys(cards).length === 0) {
    throw new ApiException('errors.invalidCount')
  }

  let gold = 0

  await DB.transaction(async () => {
    gold = await sell(userId, cards)
  })

  return { state: await getShopState(userId), cards, gold }
}

/** Quick sell: every copy beyond 4 (1 if unique) that the active deck does not need. */
export async function quickSell(userId: number): Promise<Sale> {
  let plan = { cards: {} as Record<string, number>, gold: 0 }

  await DB.transaction(async () => {
    plan = quickSellPlan(await getCollection(userId), await getDeckUsage(userId))

    if (Object.keys(plan.cards).length > 0) {
      await sell(userId, plan.cards)
    }
  })

  return { state: await getShopState(userId), ...plan }
}
