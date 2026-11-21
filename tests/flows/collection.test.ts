import { DB } from '@neogroup/neorm'
import { beforeEach, describe, expect, it } from 'vitest'
import { deleteAccount } from '@/app/(protected)/(account)/services/accounts'
import { starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { addCards, chooseStarter, getCollection } from '@/app/(protected)/(collection)/services/collection'
import {
  deleteDeck,
  getActiveDeck,
  getDeck,
  listDecks,
  playableActiveDeckId,
  playableDecks,
  saveDeck,
  setActiveDeck
} from '@/app/(protected)/(collection)/services/decks'
import { countCards } from '@/app/(protected)/(collection)/utils/deckProblems'
import { User } from '@/app/models/User'
import { createUser, resetDatabase } from '@/tests/setup/database'

const VARRO = 'legate-varro'

describe('the starter', () => {
  let ana: number

  beforeEach(async () => {
    await resetDatabase()
    ana = await createUser('ana@chronocast.test')
  })

  it('gives the chosen hero, its 39 cards and a playable deck with them', async () => {
    const { deckId, cards } = await chooseStarter(ana, VARRO)
    const collection = await getCollection(ana)
    const deck = await getDeck(ana, deckId)

    expect(cards).toHaveLength(40)
    expect(collection[VARRO]).toBe(1)
    expect(Object.values(collection).reduce((sum, count) => sum + count, 0)).toBe(40)
    expect(deck.heroId).toBe(VARRO)
    expect(deck.cards).toEqual(countCards(starterDeck(VARRO).cards))
    expect((await listDecks(ana))[0]).toMatchObject({ size: 40, playable: true, name: 'Legate Varro' })
    expect((await User.find(ana))!.starterHeroId).toBe(VARRO)
  })

  it('can only be chosen once, and only among the starter heroes', async () => {
    await expect(chooseStarter(ana, 'chrono-golem')).rejects.toMatchObject({ messageKey: 'errors.invalidHero' })
    await chooseStarter(ana, VARRO)
    await expect(chooseStarter(ana, 'kora-wildfang')).rejects.toMatchObject({
      messageKey: 'errors.starterAlreadyChosen'
    })
  })
})

describe('decks', () => {
  let ana: number
  let beto: number
  let starterId: number

  beforeEach(async () => {
    await resetDatabase()
    ana = await createUser('ana@chronocast.test')
    beto = await createUser('beto@chronocast.test')
    starterId = (await chooseStarter(ana, VARRO)).deckId
  })

  it('saves an unfinished deck, which then cannot be played', async () => {
    const deck = await saveDeck(ana, { name: '  Fast   bronze ', heroId: VARRO, cards: { 'arena-champion': 2 } })

    expect(deck.name).toBe('Fast bronze')
    expect(deck.cards).toEqual({ 'arena-champion': 2 })
    expect((await listDecks(ana)).find((summary) => summary.id === deck.id)).toMatchObject({
      size: 3,
      playable: false
    })
    expect((await playableDecks(ana)).map((playable) => playable.id)).toEqual([starterId])
  })

  it('the starter deck is the active one, and only a playable deck can take its place', async () => {
    expect((await getActiveDeck(ana))?.id).toBe(starterId)
    expect(await playableActiveDeckId(ana)).toBe(starterId)

    const starter = await getDeck(ana, starterId)
    const copy = await saveDeck(ana, { name: 'Copy', heroId: VARRO, cards: starter.cards })
    const unfinished = await saveDeck(ana, { name: 'Half', heroId: VARRO, cards: { 'arena-champion': 2 } })

    // Marked, it stays active even if another deck is edited later.
    expect((await getActiveDeck(ana))?.id).toBe(starterId)
    await expect(setActiveDeck(ana, unfinished.id)).rejects.toMatchObject({ messageKey: 'errors.deckNotPlayable' })
    await expect(setActiveDeck(beto, copy.id)).rejects.toMatchObject({ messageKey: 'errors.deckNotFound' })

    await setActiveDeck(ana, copy.id)
    expect((await listDecks(ana)).filter((summary) => summary.active).map((summary) => summary.id)).toEqual([copy.id])

    // Deleted, the most recently edited playable deck takes its place.
    await deleteDeck(ana, copy.id)
    expect((await getActiveDeck(ana))?.id).toBe(starterId)

    expect(await getActiveDeck(beto)).toBeNull()
    await expect(playableActiveDeckId(beto)).rejects.toMatchObject({ messageKey: 'errors.activeDeckNotPlayable' })
  })

  it('updates a deck', async () => {
    const starter = await getDeck(ana, starterId)
    const [card] = Object.keys(starter.cards)
    const updated = await saveDeck(ana, {
      ...starter,
      name: 'Renamed',
      cards: { ...starter.cards, [card]: starter.cards[card] - 1 }
    })

    expect(updated.name).toBe('Renamed')
    expect(updated.cards[card]).toBe(starter.cards[card] - 1)
  })

  it('refuses cards and heroes the player does not own', async () => {
    const starter = await getDeck(ana, starterId)

    await expect(
      saveDeck(ana, { name: 'Greedy', heroId: VARRO, cards: { ...starter.cards, 'arena-champion': 9 } })
    ).rejects.toMatchObject({ messageKey: 'errors.cardsNotOwned' })
    await expect(saveDeck(ana, { name: 'Other', heroId: 'kora-wildfang', cards: {} })).rejects.toMatchObject({
      messageKey: 'errors.heroNotOwned'
    })
    await expect(saveDeck(ana, { name: 'Odd', heroId: VARRO, cards: { nope: 1 } })).rejects.toMatchObject({
      messageKey: 'errors.unknownCard'
    })
    await expect(saveDeck(ana, { name: ' ', heroId: VARRO, cards: {} })).rejects.toMatchObject({
      messageKey: 'errors.deckNameRequired'
    })
  })

  it("never touches another player's decks", async () => {
    await expect(getDeck(beto, starterId)).rejects.toMatchObject({ messageKey: 'errors.deckNotFound' })
    await expect(deleteDeck(beto, starterId)).rejects.toMatchObject({ messageKey: 'errors.deckNotFound' })
    await expect(saveDeck(beto, { id: starterId, name: 'Mine', heroId: VARRO, cards: {} })).rejects.toBeTruthy()
  })

  it('deletes a deck with its cards', async () => {
    await deleteDeck(ana, starterId)

    expect(await listDecks(ana)).toEqual([])
    expect(await DB.table('deck_cards').where('deckId', starterId).get()).toHaveLength(0)
  })

  it('adds copies to the collection', async () => {
    await addCards(ana, { 'chrono-golem': 2, fireball: 1 })

    const collection = await getCollection(ana)

    expect(collection.fireball).toBe(1)
    expect(collection['chrono-golem']).toBe((countCards(starterDeck(VARRO).cards)['chrono-golem'] ?? 0) + 2)
  })

  it('goes away with the account', async () => {
    await deleteAccount(ana)

    expect(await DB.table('decks').where('userId', ana).get()).toHaveLength(0)
    expect(await DB.table('user_cards').where('userId', ana).get()).toHaveLength(0)
    expect(await DB.table('deck_cards').where('deckId', starterId).get()).toHaveLength(0)
  })
})
