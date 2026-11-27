import { PoolLayer } from '@/app/(protected)/(cards)/data/heroPools'
import { CARDS } from '@/app/(protected)/(cards)/utils/catalog'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { canUseCard } from '@/app/(protected)/(engine)/utils/deckRules'

/**
 * The layer of a hero's pool a card belongs to (docs/PLAN.md, section 4.3):
 * `faction` if it asks for a faction or a hero, `side` if it only asks for a
 * side, `neutral` if any hero can use it.
 */
export function poolLayer(card: CardDefinition): PoolLayer {
  const { factions, sides, heroes } = card.restriction

  if (factions?.length || heroes?.length) {
    return 'faction'
  }

  return sides?.length ? 'side' : 'neutral'
}

/** The cards a hero can have in its deck. */
export function heroPool(hero: CardDefinition): CardDefinition[] {
  return CARDS.filter((card) => canUseCard(hero, card))
}

/** How many cards of each layer a hero can use. */
export function heroPoolLayers(hero: CardDefinition): Record<PoolLayer, number> {
  const counts: Record<PoolLayer, number> = { neutral: 0, side: 0, faction: 0 }

  for (const card of heroPool(hero)) {
    counts[poolLayer(card)] += 1
  }

  return counts
}
