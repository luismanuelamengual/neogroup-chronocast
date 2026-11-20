import { Collection } from '@/app/(protected)/(collection)/models/Collection'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { DeckProblem, validateDeck } from '@/app/(protected)/(engine)/utils/deckRules'

export type CollectionProblem =
  | DeckProblem
  | { code: 'notOwned'; cardId: string; count: number; owned: number }
  | { code: 'heroNotOwned'; cardId: string }

/** The count of each card id of a list. */
export function countCards(cards: string[]): Record<string, number> {
  const counts: Record<string, number> = {}

  for (const cardId of cards) {
    counts[cardId] = (counts[cardId] ?? 0) + 1
  }

  return counts
}

/** The card ids of a count of cards, one per copy. */
export function expandCards(counts: Record<string, number>): string[] {
  return Object.entries(counts).flatMap(([cardId, count]) => Array.from({ length: Math.max(0, count) }, () => cardId))
}

/**
 * Everything that keeps a deck from being played: the deck rules
 * (docs/PLAN.md, section 6.1) plus owning its hero and enough copies of each card.
 */
export function deckProblems(deck: DeckList, collection: Collection): CollectionProblem[] {
  const problems: CollectionProblem[] = validateDeck(deck)

  if (!collection[deck.heroId]) {
    problems.push({ code: 'heroNotOwned', cardId: deck.heroId })
  }

  for (const [cardId, count] of Object.entries(countCards(deck.cards))) {
    const owned = collection[cardId] ?? 0

    if (count > owned) {
      problems.push({ code: 'notOwned', cardId, count, owned })
    }
  }

  return problems
}

/** How many cards of each cost (the last bucket counts every cost from 7 up). */
export function costCurve(cards: { cost: number }[], buckets = 8): number[] {
  const curve = Array.from({ length: buckets }, () => 0)

  for (const card of cards) {
    curve[Math.min(card.cost, buckets - 1)]++
  }

  return curve
}
