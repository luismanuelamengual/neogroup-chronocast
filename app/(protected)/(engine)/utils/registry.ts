import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'

/**
 * The card catalog the engine plays with. The real catalog registers itself
 * when app/(protected)/(cards)/utils/catalog.ts is imported; tests can add
 * cards of their own.
 */
const cards = new Map<string, CardDefinition>()

/** The id of a card a player can't see (the rival's hand, the decks, in PvP). */
export const HIDDEN_CARD_ID = 'hidden'

/** What the engine and the screen know of a hidden card: nothing (it is never in the catalog). */
const HIDDEN_CARD: CardDefinition = {
  id: HIDDEN_CARD_ID,
  type: 'ability',
  name: '?',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  cost: 0,
  art: { subject: 'the back of a card' }
}

export function registerCards(definitions: CardDefinition[]): void {
  for (const definition of definitions) {
    cards.set(definition.id, definition)
  }
}

export function getCard(id: string): CardDefinition {
  const card = id === HIDDEN_CARD_ID ? HIDDEN_CARD : cards.get(id)

  if (!card) {
    throw new Error(`Unknown card "${id}" (is the catalog imported?)`)
  }

  return card
}

export function hasCard(id: string): boolean {
  return cards.has(id)
}

export function allCards(): CardDefinition[] {
  return [...cards.values()]
}
