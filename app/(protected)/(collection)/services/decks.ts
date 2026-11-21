import '@/app/(protected)/(cards)/utils/catalog'
import { DB } from '@neogroup/neorm'
import { Collection } from '@/app/(protected)/(collection)/models/Collection'
import { ActiveDeck, DeckDto, DeckInput, DeckSummary } from '@/app/(protected)/(collection)/models/DeckDto'
import { getCollection, lastDeckId } from '@/app/(protected)/(collection)/services/collection'
import { deckProblems, expandCards } from '@/app/(protected)/(collection)/utils/deckProblems'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { getCard, hasCard } from '@/app/(protected)/(engine)/utils/registry'
import { ApiException } from '@/app/models/ApiException'
import { column } from '@/app/utils/rows'

const MAX_NAME_LENGTH = 40

function toIso(value: unknown): string {
  const date = value instanceof Date ? value : new Date(String(value))

  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString()
}

async function loadDecks(userId: number, deckId?: number): Promise<DeckDto[]> {
  let query = DB.table('decks').where('userId', userId)

  if (deckId != null) {
    query = query.where('id', deckId)
  }

  const rows = (await query.get()).sort(
    (a, b) => toIso(b.updatedAt).localeCompare(toIso(a.updatedAt)) || Number(b.id) - Number(a.id)
  )

  if (rows.length === 0) {
    return []
  }

  const cardRows = await DB.table('deck_cards')
    .whereIn(
      'deckId',
      rows.map((row) => Number(row.id))
    )
    .get()

  return rows.map((row) => {
    const id = Number(row.id)
    const cards: Record<string, number> = {}

    for (const card of cardRows.filter((candidate) => Number(column(candidate, 'deckId')) === id)) {
      cards[String(column(card, 'cardId'))] = Number(column(card, 'count'))
    }

    return {
      id,
      name: String(row.name),
      heroId: String(column(row, 'heroId')),
      cards,
      updatedAt: toIso(column(row, 'updatedAt'))
    }
  })
}

export function toDeckList(deck: Pick<DeckDto, 'heroId' | 'cards'>): DeckList {
  return { heroId: deck.heroId, cards: expandCards(deck.cards) }
}

/**
 * Which deck is the active one: the one the player marked, or (none marked,
 * or it was deleted) the most recently edited playable deck, or else the most
 * recently edited one.
 */
async function pickActive(userId: number, decks: DeckDto[], collection: Collection): Promise<DeckDto | null> {
  const user = await DB.table('users').where('id', userId).first()
  const marked = user ? Number(column(user, 'activeDeckId') ?? 0) : 0

  return (
    decks.find((deck) => deck.id === marked) ??
    decks.find((deck) => deckProblems(toDeckList(deck), collection).length === 0) ??
    decks[0] ??
    null
  )
}

/** The decks of a player, most recently edited first, with whether each one can be played and which is active. */
export async function listDecks(userId: number): Promise<DeckSummary[]> {
  const [decks, collection] = await Promise.all([loadDecks(userId), getCollection(userId)])
  const active = await pickActive(userId, decks, collection)

  return decks.map((deck) => {
    const list = toDeckList(deck)

    return {
      id: deck.id,
      name: deck.name,
      heroId: deck.heroId,
      size: list.cards.length + 1,
      playable: deckProblems(list, collection).length === 0,
      active: deck.id === active?.id,
      updatedAt: deck.updatedAt
    }
  })
}

/**
 * The deck every game mode plays with (docs/PLAN.md, section 6), with whether
 * it can be played right now. Null: the player has no decks.
 */
export async function getActiveDeck(userId: number): Promise<ActiveDeck | null> {
  const [decks, collection] = await Promise.all([loadDecks(userId), getCollection(userId)])
  const deck = await pickActive(userId, decks, collection)

  return deck && { ...deck, playable: deckProblems(toDeckList(deck), collection).length === 0 }
}

/** The id of the active deck, to play with; it fails when there is none or it is not ready. */
export async function playableActiveDeckId(userId: number): Promise<number> {
  const deck = await getActiveDeck(userId)

  if (!deck?.playable) {
    throw new ApiException('errors.activeDeckNotPlayable')
  }

  return deck.id
}

/** Marks a deck as the active one. Only a deck ready to play can be. */
export async function setActiveDeck(userId: number, deckId: number): Promise<void> {
  const deck = await getDeck(userId, deckId)

  if (deckProblems(toDeckList(deck), await getCollection(userId)).length > 0) {
    throw new ApiException('errors.deckNotPlayable')
  }

  await DB.table('users').where('id', userId).update({ activeDeckId: deck.id })
}

/** The decks a player can play right now, with their cards. */
export async function playableDecks(userId: number): Promise<DeckDto[]> {
  const [decks, collection] = await Promise.all([loadDecks(userId), getCollection(userId)])

  return decks.filter((deck) => deckProblems(toDeckList(deck), collection).length === 0)
}

export async function getDeck(userId: number, deckId: number): Promise<DeckDto> {
  const [deck] = await loadDecks(userId, deckId)

  if (!deck) {
    throw new ApiException('errors.deckNotFound', 404)
  }

  return deck
}

/**
 * Creates or updates a deck. A deck can be saved unfinished (fewer than 40
 * cards, too many copies...) and then it just can't be played; what is never
 * accepted is an unknown card, a hero the player doesn't own or more copies
 * than the player owns.
 */
export async function saveDeck(userId: number, input: DeckInput): Promise<DeckDto> {
  const name = String(input.name ?? '')
    .trim()
    .replace(/\s+/g, ' ')

  if (!name) {
    throw new ApiException('errors.deckNameRequired')
  }

  if (name.length > MAX_NAME_LENGTH) {
    throw new ApiException('errors.deckNameTooLong', 400, { max: MAX_NAME_LENGTH })
  }

  const cards: Record<string, number> = {}

  for (const [cardId, count] of Object.entries(input.cards ?? {})) {
    const value = Math.floor(Number(count))

    if (!hasCard(cardId)) {
      throw new ApiException('errors.unknownCard', 400, { card: cardId })
    }

    if (value > 0) {
      cards[cardId] = value
    }
  }

  if (!hasCard(input.heroId) || getCard(input.heroId).type !== 'hero') {
    throw new ApiException('errors.invalidHero')
  }

  const collection = await getCollection(userId)
  const ownership = deckProblems({ heroId: input.heroId, cards: expandCards(cards) }, collection).filter(
    (problem) => problem.code === 'notOwned' || problem.code === 'heroNotOwned'
  )

  if (ownership.length > 0) {
    throw new ApiException(ownership[0].code === 'heroNotOwned' ? 'errors.heroNotOwned' : 'errors.cardsNotOwned')
  }

  let deckId = input.id

  await DB.transaction(async () => {
    if (deckId != null) {
      await getDeck(userId, deckId)
      await DB.table('decks').where('id', deckId).update({ name, heroId: input.heroId, updatedAt: new Date() })
      await DB.table('deck_cards').where('deckId', deckId).delete()
    } else {
      await DB.table('decks').insert({ userId, name, heroId: input.heroId })

      deckId = await lastDeckId(userId)
    }

    const rows = Object.entries(cards).map(([cardId, count]) => ({ deckId, cardId, count }))

    if (rows.length > 0) {
      await DB.table('deck_cards').insert(rows)
    }
  })

  return getDeck(userId, deckId!)
}

export async function deleteDeck(userId: number, deckId: number): Promise<void> {
  await getDeck(userId, deckId)
  await DB.transaction(async () => {
    await DB.table('deck_cards').where('deckId', deckId).delete()
    await DB.table('decks').where('id', deckId).where('userId', userId).delete()
    await DB.table('users').where('id', userId).where('activeDeckId', deckId).update({ activeDeckId: null })
  })
}
