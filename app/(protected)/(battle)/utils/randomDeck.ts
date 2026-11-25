import { CARDS, HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import { MAX_COPIES, MAX_UNIQUE_COPIES, MIN_DECK_SIZE } from '@/app/(protected)/(engine)/data/rules'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { CardType } from '@/app/(protected)/(engine)/models/CardType'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { canUseCard } from '@/app/(protected)/(engine)/utils/deckRules'
import { nextRandom } from '@/app/(protected)/(engine)/utils/random'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

/** Cards in the deck besides the hero (the smallest legal deck). */
const DECK_CARDS = MIN_DECK_SIZE - 1
/**
 * The shape of the deck, like the hand-built basic decks (data/heroDecks.ts):
 * about half allies, a handful of abilities, a few weapons and armors, and
 * the rest items, artifacts, attachments and traps.
 */
const GROUPS: { types: CardType[]; count: number }[] = [
  { types: ['ally'], count: 19 },
  { types: ['ability'], count: 8 },
  { types: ['weapon'], count: 3 },
  { types: ['armor'], count: 3 },
  { types: ['item', 'artifact', 'attachment', 'trap'], count: 6 }
]
/** The allies by cost (the last bucket: 6 and up): a curve that has something to play from the first phase. */
const ALLY_CURVE = [0, 2, 5, 5, 3, 3, 1]
/** How likely each rarity is: mostly common and uncommon cards, now and then a rare one or better. */
const RARITY_WEIGHT: Record<Rarity, number> = {
  common: 10,
  uncommon: 7,
  rare: 3,
  epic: 1,
  legendary: 0.3,
  exotic: 0.15,
  mythic: 0.15
}

/** The non-ally cards: the cheap ones more often, so the hand doesn't get stuck. */
function costWeight(cost: number): number {
  return cost <= 3 ? 1 : cost === 4 ? 0.6 : cost === 5 ? 0.3 : 0.1
}

/** The hero's own cards, its class's and its faction's come up more than the neutral ones. */
function affinityWeight(hero: CardDefinition, card: CardDefinition): number {
  const { factions, sides, classes, heroes } = card.restriction

  if (heroes?.length) {
    return 3
  }

  // A card with several criteria weighs like its most specific one.
  const weights = [classes?.length ? 2.5 : 0, factions?.length ? 2 : 0, sides?.length ? 1.75 : 0]
  const weight = Math.max(...weights)

  return weight > 0 ? weight : hero.faction === card.faction ? 1.5 : 1
}

/** A seeded random number generator in [0, 1). */
function seededRandom(seed: number): () => number {
  let state = seed | 0

  return () => {
    const next = nextRandom(state)

    state = next.state

    return next.value
  }
}

function pickWeighted<T>(items: T[], weight: (item: T) => number, random: () => number): T | null {
  const weights = items.map(weight)
  const total = weights.reduce((sum, value) => sum + value, 0)

  if (total <= 0) {
    return null
  }

  let roll = random() * total

  for (let i = 0; i < items.length; i++) {
    roll -= weights[i]

    if (roll < 0) {
      return items[i]
    }
  }

  return items[items.length - 1]
}

/**
 * A random deck for a hero (the quick match against the CPU): 39 cards it can
 * use, with the mix of types of a basic deck, a cost curve for the allies, 1
 * to 3 copies of each card (1 if it is unique) and mostly common and uncommon
 * cards. No campaign rewards. The same seed always builds the same deck.
 */
export function randomDeck(heroId: string, seed: number): DeckList {
  const hero = getCard(heroId)
  const random = seededRandom(seed)
  const pool = CARDS.filter((card) => card.type !== 'hero' && !card.reward && canUseCard(hero, card)).sort((a, b) =>
    a.id.localeCompare(b.id)
  )
  const counts = new Map<string, number>()
  const curve = ALLY_CURVE.map(() => 0)
  const cards: string[] = []
  const left = (card: CardDefinition) =>
    (card.keywords?.includes('unique') ? MAX_UNIQUE_COPIES : MAX_COPIES) - (counts.get(card.id) ?? 0)
  const bucket = (cost: number) => Math.min(Math.max(cost, 0), ALLY_CURVE.length - 1)

  const add = (card: CardDefinition, room: number) => {
    const wanted = 1 + Math.floor(random() * 3)
    const copies = Math.max(1, Math.min(wanted, left(card), room, card.type === 'ally' ? 3 : 2))

    for (let i = 0; i < copies; i++) {
      cards.push(card.id)
    }

    counts.set(card.id, (counts.get(card.id) ?? 0) + copies)

    if (card.type === 'ally') {
      curve[bucket(card.cost)] += copies
    }

    return copies
  }

  const fill = (types: CardType[] | null, count: number) => {
    let added = 0

    while (added < count && cards.length < DECK_CARDS) {
      const candidates = pool.filter((card) => (!types || types.includes(card.type)) && left(card) > 0)
      const card = pickWeighted(
        candidates,
        (card) => {
          const fit =
            card.type === 'ally'
              ? Math.max(0.1, 1 + ALLY_CURVE[bucket(card.cost)] - curve[bucket(card.cost)])
              : costWeight(card.cost)
          // More copies of a card already in the deck add little variety: new cards first.
          const fresh = counts.has(card.id) ? 0.4 : 1

          return RARITY_WEIGHT[card.rarity] * affinityWeight(hero, card) * fit * fresh
        },
        random
      )

      if (!card) {
        break
      }

      added += add(card, Math.min(count - added, DECK_CARDS - cards.length))
    }

    return added
  }

  let missing = 0

  for (const group of GROUPS) {
    missing += group.count - fill(group.types, group.count)
  }

  // A hero with few cards of some type: allies take their place, then anything it can use.
  fill(['ally'], missing)
  fill(null, DECK_CARDS - cards.length)

  return { heroId, cards }
}

/** The heroes the CPU can play in a quick match: any hero a player can own. */
export const QUICK_MATCH_HEROES = HEROES.map((hero) => hero.id)

/**
 * The rival of a quick match: a random hero (not the player's, so the match
 * feels different) with a random deck. Different every time.
 */
export function randomRival(playerHeroId?: string, seed: number = Math.floor(Math.random() * 2147483647)): DeckList {
  const random = seededRandom(seed)
  const heroes = QUICK_MATCH_HEROES.filter((id) => id !== playerHeroId)
  const choices = heroes.length > 0 ? heroes : QUICK_MATCH_HEROES
  const heroId = choices[Math.floor(random() * choices.length)]

  return randomDeck(heroId, Math.floor(random() * 2147483647))
}
