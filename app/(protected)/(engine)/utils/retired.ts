import { RETIRED_CARD_TYPES } from '@/app/(protected)/(engine)/data/rules'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'

/**
 * A card of a type out of the game for now (RETIRED_CARD_TYPES). The campaign
 * rewards stay in the game: they are the prize of their campaign.
 */
export function isRetired(card: CardDefinition): boolean {
  return RETIRED_CARD_TYPES.includes(card.type) && !card.reward
}
