import { CARD_FILES } from '@/app/(protected)/(cards)/cards/index.generated'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { getCard, registerCards } from '@/app/(protected)/(engine)/utils/registry'
import { isRetired } from '@/app/(protected)/(engine)/utils/retired'

/**
 * Every card: each file of cards/ (through the generated index), the campaign
 * bosses and their cards included. They are registered in the engine as soon
 * as this module is imported, so anything that plays a match imports it first.
 */
export const ALL_CARDS: CardDefinition[] = CARD_FILES.map(({ card }) => card)

registerCards(ALL_CARDS)

/** The cards players can own: everything but the campaign bosses and their cards, and the retired types. */
export const CARDS: CardDefinition[] = ALL_CARDS.filter((card) => !card.boss && !card.token && !isRetired(card))

export const HEROES: CardDefinition[] = CARDS.filter((card) => card.type === 'hero')

export function findCard(id: string): CardDefinition {
  return getCard(id)
}
