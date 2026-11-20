import { MAX_COPIES, MAX_DECK_SIZE, MAX_UNIQUE_COPIES, MIN_DECK_SIZE } from '@/app/(protected)/(engine)/data/rules'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { getCard, hasCard } from '@/app/(protected)/(engine)/utils/registry'

/** Whether a hero can have a card in its deck (docs/PLAN.md, section 4.2). */
export function canUseCard(hero: CardDefinition, card: CardDefinition): boolean {
  if (card.type === 'hero') {
    return false
  }

  const restriction = card.restriction

  switch (restriction.kind) {
    case 'any':
      return true
    case 'faction':
      return hero.faction === restriction.faction
    case 'class':
      return hero.heroClass === restriction.heroClass
    case 'hero':
      return hero.id === restriction.heroId
  }
}

export type DeckProblem =
  | { code: 'unknownCard'; cardId: string }
  | { code: 'notAHero'; cardId: string }
  | { code: 'heroInDeck'; cardId: string }
  | { code: 'tooFewCards'; count: number; min: number }
  | { code: 'tooManyCards'; count: number; max: number }
  | { code: 'tooManyCopies'; cardId: string; count: number; max: number }
  | { code: 'restricted'; cardId: string }

/**
 * Deck rules (docs/PLAN.md, section 6.1): exactly one hero, 40 to 200 cards
 * counting the hero, at most 4 copies of a card (1 if it is unique), and every
 * card usable by the hero. Returns the problems (empty: the deck is legal).
 */
export function validateDeck(deck: DeckList): DeckProblem[] {
  const problems: DeckProblem[] = []

  if (!hasCard(deck.heroId)) {
    return [{ code: 'unknownCard', cardId: deck.heroId }]
  }

  const hero = getCard(deck.heroId)

  if (hero.type !== 'hero') {
    problems.push({ code: 'notAHero', cardId: hero.id })
  }

  const total = deck.cards.length + 1

  if (total < MIN_DECK_SIZE) {
    problems.push({ code: 'tooFewCards', count: total, min: MIN_DECK_SIZE })
  }

  if (total > MAX_DECK_SIZE) {
    problems.push({ code: 'tooManyCards', count: total, max: MAX_DECK_SIZE })
  }

  const counts = new Map<string, number>()

  for (const cardId of deck.cards) {
    counts.set(cardId, (counts.get(cardId) ?? 0) + 1)
  }

  for (const [cardId, count] of counts) {
    if (!hasCard(cardId)) {
      problems.push({ code: 'unknownCard', cardId })
      continue
    }

    const card = getCard(cardId)
    const max = card.keywords?.includes('unique') ? MAX_UNIQUE_COPIES : MAX_COPIES

    if (card.type === 'hero') {
      problems.push({ code: 'heroInDeck', cardId })
    } else if (!canUseCard(hero, card)) {
      problems.push({ code: 'restricted', cardId })
    }

    if (count > max) {
      problems.push({ code: 'tooManyCopies', cardId, count, max })
    }
  }

  return problems
}
