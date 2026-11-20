import '@/app/(protected)/(cards)/utils/catalog'
import { DB } from '@neogroup/neorm'
import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { Collection } from '@/app/(protected)/(collection)/models/Collection'
import { countCards } from '@/app/(protected)/(collection)/utils/deckProblems'
import { getCard, hasCard } from '@/app/(protected)/(engine)/utils/registry'
import { ApiException } from '@/app/models/ApiException'
import { User } from '@/app/models/User'
import { column } from '@/app/utils/rows'

/** The id of the newest deck of a player (right after inserting one). */
export async function lastDeckId(userId: number): Promise<number> {
  const rows = await DB.table('decks').where('userId', userId).select('id').get()

  return Math.max(...rows.map((row) => Number(row.id)))
}

/** The cards a player owns. */
export async function getCollection(userId: number): Promise<Collection> {
  const rows = await DB.table('user_cards').where('userId', userId).get()
  const collection: Collection = {}

  for (const row of rows) {
    const quantity = Number(column(row, 'quantity'))

    if (quantity > 0 && hasCard(String(column(row, 'cardId')))) {
      collection[String(column(row, 'cardId'))] = quantity
    }
  }

  return collection
}

/** Adds copies of cards to a player's collection (packs, rewards, the starter). */
export async function addCards(userId: number, cards: Record<string, number>): Promise<void> {
  const current = await getCollection(userId)

  for (const [cardId, count] of Object.entries(cards)) {
    if (count <= 0) {
      continue
    }

    if (current[cardId] != null) {
      await DB.table('user_cards')
        .where('userId', userId)
        .where('cardId', cardId)
        .update({ quantity: current[cardId] + count })
    } else {
      await DB.table('user_cards').insert({ userId, cardId, quantity: count })
    }
  }
}

/**
 * The first visit (docs/PLAN.md, section 6.2): the player picks one of the
 * starter heroes and gets its starter pack (the hero + 39 cards) and a deck
 * with exactly those cards. Only once.
 */
export async function chooseStarter(userId: number, heroId: string): Promise<{ deckId: number; cards: string[] }> {
  if (!STARTER_HERO_IDS.includes(heroId)) {
    throw new ApiException('errors.invalidHero')
  }

  const user = await User.find(userId)

  if (!user) {
    throw new ApiException('errors.notAuthenticated', 401)
  }

  if (user.starterHeroId) {
    throw new ApiException('errors.starterAlreadyChosen')
  }

  const deck = starterDeck(heroId)
  let deckId = 0

  await DB.transaction(async () => {
    await addCards(userId, { [heroId]: 1, ...countCards(deck.cards) })
    await DB.table('decks').insert({ userId, name: getCard(heroId).name, heroId })

    deckId = await lastDeckId(userId)
    await DB.table('deck_cards').insert(
      Object.entries(countCards(deck.cards)).map(([cardId, count]) => ({ deckId, cardId, count }))
    )
    await DB.table('users').where('id', userId).update({ starterHeroId: heroId })
  })

  return { deckId, cards: [heroId, ...deck.cards] }
}
