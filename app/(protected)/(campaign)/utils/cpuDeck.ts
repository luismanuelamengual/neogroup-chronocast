import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { RARITIES, Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { canUseCard } from '@/app/(protected)/(engine)/utils/deckRules'
import { nextRandom } from '@/app/(protected)/(engine)/utils/random'
import { allCards, getCard } from '@/app/(protected)/(engine)/utils/registry'

/** Cards in a deck besides the hero. */
const DECK_CARDS = 39

/** A deck from a list of [cardId, copies]. */
export function listDeck(heroId: string, list: [string, number][]): DeckList {
  return { heroId, cards: list.flatMap(([cardId, count]) => Array.from({ length: count }, () => cardId)) }
}

/**
 * A deck "at random within what the hero can use" (docs/PLAN.md, section
 * 13.2): the cards up to a rarity that the hero can use (no campaign rewards
 * nor other bosses' cards), shuffled with a seed, 2 to 4 copies each until 39.
 * The same seed always builds the same deck.
 */
export function poolDeck(heroId: string, maxRarity: Rarity, seed: number): DeckList {
  const hero = getCard(heroId)
  const limit = RARITIES.indexOf(maxRarity)
  const pool = allCards()
    .filter((card) => card.type !== 'hero' && !card.reward && RARITIES.indexOf(card.rarity) <= limit)
    .filter((card) => canUseCard(hero, card) && (!card.boss || hero.boss))
    .sort((a, b) => a.id.localeCompare(b.id))
  let rng = seed | 0

  const random = () => {
    const next = nextRandom(rng)

    rng = next.state

    return next.value
  }

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))

    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }

  const cards: string[] = []

  for (let round = 0; cards.length < DECK_CARDS && round < 4; round++) {
    for (const card of pool) {
      const copies = cards.filter((id) => id === card.id).length
      const max = card.keywords?.includes('unique') ? 1 : round < 2 ? 2 : round + 1

      if (cards.length < DECK_CARDS && copies < max) {
        cards.push(card.id)
      }
    }
  }

  return { heroId, cards }
}
