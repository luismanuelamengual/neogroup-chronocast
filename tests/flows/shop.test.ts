import { DB } from '@neogroup/neorm'
import { beforeEach, describe, expect, it } from 'vitest'
import { deleteAccount } from '@/app/(protected)/(account)/services/accounts'
import { CARDS } from '@/app/(protected)/(cards)/utils/catalog'
import { addCards, chooseStarter, getCollection } from '@/app/(protected)/(collection)/services/collection'
import { getDeck, listDecks, saveDeck, setActiveDeck } from '@/app/(protected)/(collection)/services/decks'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { HERO_PRICES } from '@/app/(protected)/(shop)/data/prices'
import { buyPack } from '@/app/(protected)/(shop)/services/packs'
import { buyCard, getShopState, quickSell, sellCards, unlockRarity } from '@/app/(protected)/(shop)/services/shop'
import { copyLimit, sellPrice } from '@/app/(protected)/(shop)/utils/prices'
import { createUser, resetDatabase } from '@/tests/setup/database'

const VARRO = 'legate-varro'
const COMMON = CARDS.find((card) => card.rarity === 'common' && card.type !== 'hero')!
const UNCOMMON = CARDS.find((card) => card.rarity === 'uncommon')!

async function setGold(userId: number, gold: number): Promise<void> {
  await DB.table('users').where('id', userId).update({ gold })
}

const total = (cards: Record<string, number>) => Object.values(cards).reduce((sum, count) => sum + count, 0)

describe('the shop', () => {
  let ana: number

  beforeEach(async () => {
    await resetDatabase()
    ana = await createUser('ana@chronocast.test')
  })

  it('starts with common open, no gold and the guarantee counter at 0', async () => {
    expect(await getShopState(ana)).toEqual({
      gold: 0,
      collection: {},
      unlocked: ['common'],
      packsWithoutLegendary: 0,
      deckUsage: {}
    })
  })

  it('sells a pack: takes its price and adds its 8 cards to the collection', async () => {
    await setGold(ana, 1000)

    const { state, cards } = await buyPack(ana, 'traveler', 42)

    expect(state.gold).toBe(700)
    expect(cards).toHaveLength(8)
    expect(total(state.collection)).toBe(8)
    expect(await getCollection(ana)).toEqual(state.collection)
  })

  it('refuses a pack without enough gold, and an unknown pack, without changing anything', async () => {
    await setGold(ana, 299)

    await expect(buyPack(ana, 'traveler')).rejects.toMatchObject({ messageKey: 'errors.notEnoughGold' })
    await expect(buyPack(ana, 'golden')).rejects.toMatchObject({ messageKey: 'errors.unknownPack' })
    expect(await getShopState(ana)).toMatchObject({ gold: 299, collection: {} })
  })

  it('counts guardian and eternal packs without a legendary for the guarantee, not the others', async () => {
    await setGold(ana, 10000)
    await buyPack(ana, 'traveler', 1)
    expect((await getShopState(ana)).packsWithoutLegendary).toBe(0)

    // The catalog has no legendary yet, so every guardian pack counts.
    await buyPack(ana, 'guardian', 2)
    const { state } = await buyPack(ana, 'guardian', 3)

    expect(state.packsWithoutLegendary).toBe(2)
  })

  it('unlocks the rarities in order and for their cost', async () => {
    await setGold(ana, 4500)

    await expect(unlockRarity(ana, 'rare')).rejects.toMatchObject({ messageKey: 'errors.previousRarityLocked' })
    await expect(unlockRarity(ana, 'common')).rejects.toMatchObject({ messageKey: 'errors.rarityAlreadyUnlocked' })

    const state = await unlockRarity(ana, 'uncommon')

    expect(state).toMatchObject({ gold: 3500, unlocked: ['common', 'uncommon'] })
    await expect(unlockRarity(ana, 'uncommon')).rejects.toMatchObject({ messageKey: 'errors.rarityAlreadyUnlocked' })

    expect((await unlockRarity(ana, 'rare')).unlocked).toEqual(['common', 'uncommon', 'rare'])
    await expect(unlockRarity(ana, 'epic')).rejects.toMatchObject({ messageKey: 'errors.notEnoughGold' })
    expect((await getShopState(ana)).gold).toBe(500)
  })

  it('sells single cards at their own price, only of unlocked rarities', async () => {
    await setGold(ana, 2000)

    let state = await buyCard(ana, COMMON.id, 2)

    expect(state.gold).toBe(2000 - 2 * COMMON.price!)
    expect(state.collection[COMMON.id]).toBe(2)

    await expect(buyCard(ana, UNCOMMON.id)).rejects.toMatchObject({ messageKey: 'errors.rarityLocked' })
    await expect(buyCard(ana, VARRO)).rejects.toMatchObject({ messageKey: 'errors.notEnoughGold' })
    await expect(buyCard(ana, 'queen-static')).rejects.toMatchObject({ messageKey: 'errors.cardNotForSale' })
    await expect(buyCard(ana, COMMON.id, 0)).rejects.toMatchObject({ messageKey: 'errors.invalidCount' })

    await unlockRarity(ana, 'uncommon')
    await setGold(ana, UNCOMMON.price!)
    state = await buyCard(ana, UNCOMMON.id)

    expect(state).toMatchObject({ gold: 0, collection: { [UNCOMMON.id]: 1 } })
  })

  it('sells a playable hero once, for its dear price, after its rarity is unlocked', async () => {
    const hero = CARDS.find(
      (card) => card.type === 'hero' && !card.boss && card.rarity === 'common' && card.id !== VARRO
    )!
    const price = HERO_PRICES.common

    await setGold(ana, price)
    let state = await buyCard(ana, hero.id)

    expect(state).toMatchObject({ gold: 0, collection: { [hero.id]: 1 } })
    await setGold(ana, price * 2)
    await expect(buyCard(ana, hero.id)).rejects.toMatchObject({ messageKey: 'errors.heroOwned' })

    const other = CARDS.find(
      (card) => card.type === 'hero' && !card.boss && card.rarity === 'common' && card.id !== hero.id
    )!

    await expect(buyCard(ana, other.id, 2)).rejects.toMatchObject({ messageKey: 'errors.heroOwned' })
    await expect(buyCard(ana, 'queen-static')).rejects.toMatchObject({ messageKey: 'errors.cardNotForSale' })
    state = await getShopState(ana)
    expect(state.gold).toBe(price * 2)
  })

  it('buys back cards for 15 % of their price', async () => {
    await addCards(ana, { [COMMON.id]: 3, [VARRO]: 1 })

    const sale = await sellCards(ana, { [COMMON.id]: 2 })

    expect(sale.gold).toBe(2 * sellPrice(COMMON))
    expect(sale.state).toMatchObject({ gold: 2 * sellPrice(COMMON), collection: { [COMMON.id]: 1 } })
    await expect(sellCards(ana, { [COMMON.id]: 2 })).rejects.toMatchObject({ messageKey: 'errors.notEnoughCopies' })
    await expect(sellCards(ana, { [VARRO]: 1 })).rejects.toMatchObject({ messageKey: 'errors.cardNotSellable' })
  })

  it('quick sell sells the spare copies and never leaves a saved deck unfinished', async () => {
    await chooseStarter(ana, VARRO)

    const used = (await getShopState(ana)).deckUsage
    const inDeck = Object.keys(used).find((id) => id !== VARRO && used[id] === 3)!
    const free = CARDS.find((card) => card.type !== 'hero' && !used[card.id])!

    // 3 in the deck + 3 more: the playset of 4 stays, the other 2 go.
    await addCards(ana, { [inDeck]: 3, [free.id]: 6 })

    const sale = await quickSell(ana)

    expect(sale.cards).toEqual({ [inDeck]: 2, [free.id]: 2 })
    expect(sale.gold).toBe(2 * sellPrice(getCard(inDeck)) + 2 * sellPrice(free))
    expect(sale.state.collection).toMatchObject({ [inDeck]: 4, [free.id]: 4, [VARRO]: 1 })
    expect((await listDecks(ana))[0].playable).toBe(true)

    expect((await quickSell(ana)).cards).toEqual({})
  })

  it('never sells the copies a saved deck holds', async () => {
    await chooseStarter(ana, VARRO)

    const used = (await getShopState(ana)).deckUsage
    const inDeck = Object.keys(used).find((id) => id !== VARRO && used[id] === 3)!

    await expect(sellCards(ana, { [inDeck]: 1 })).rejects.toMatchObject({ messageKey: 'errors.cardInDeck' })

    await addCards(ana, { [inDeck]: 2 })
    await expect(sellCards(ana, { [inDeck]: 3 })).rejects.toMatchObject({ messageKey: 'errors.cardInDeck' })

    const sale = await sellCards(ana, { [inDeck]: 2 })

    expect(sale.state.collection[inDeck]).toBe(3)
    expect((await listDecks(ana))[0].playable).toBe(true)
  })

  it('only protects the active deck: the other decks can be left unfinished', async () => {
    const { deckId } = await chooseStarter(ana, VARRO)
    const starter = await getDeck(ana, deckId)
    const [cardId] = Object.keys(starter.cards)
    const count = starter.cards[cardId]
    const other = CARDS.find(
      (card) =>
        card.type !== 'hero' && card.restriction.kind === 'any' && copyLimit(card) >= count && !starter.cards[card.id]
    )!

    // The active deck swaps that card for another one: its copies are free to sell.
    await addCards(ana, { [other.id]: count })

    const { [cardId]: _, ...rest } = starter.cards
    const swapped = await saveDeck(ana, { name: 'Swapped', heroId: VARRO, cards: { ...rest, [other.id]: count } })

    await expect(sellCards(ana, { [other.id]: 1 })).resolves.toBeTruthy()
    await addCards(ana, { [other.id]: 1 })
    await setActiveDeck(ana, swapped.id)
    await expect(sellCards(ana, { [other.id]: 1 })).rejects.toMatchObject({ messageKey: 'errors.cardInDeck' })

    const sale = await sellCards(ana, { [cardId]: count })
    const decks = await listDecks(ana)

    expect(sale.state.deckUsage[cardId]).toBeUndefined()
    expect(decks.find((deck) => deck.id === swapped.id)).toMatchObject({ active: true, playable: true })
    expect(decks.find((deck) => deck.id === deckId)?.playable).toBe(false)
  })

  it('deleting the account deletes its unlocks', async () => {
    await setGold(ana, 1000)
    await unlockRarity(ana, 'uncommon')
    await deleteAccount(ana)

    expect(await DB.table('shop_unlocks').get()).toHaveLength(0)
  })
})
