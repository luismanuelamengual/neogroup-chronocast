import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { RARITIES, Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { nextRandom } from '@/app/(protected)/(engine)/utils/random'
import { allCards } from '@/app/(protected)/(engine)/utils/registry'
import { PackDefinition, PackSlot } from '@/app/(protected)/(shop)/data/packs'
import { isInPacks } from '@/app/(protected)/(shop)/utils/prices'

export interface PackResult {
  /** The cards, from the lowest rarity to the highest (the order of the opening). */
  cards: string[]
  /** It brought a legendary or better. */
  hasLegendary: boolean
}

const LEGENDARY = RARITIES.indexOf('legendary')

/** The cards a pack can bring: no heroes nor campaign rewards; faction packs, only their faction and neutrals. */
export function packPool(pack: PackDefinition, cards: CardDefinition[] = allCards()): CardDefinition[] {
  return cards.filter(
    (card) => isInPacks(card) && (!pack.faction || card.faction === pack.faction || card.faction === 'neutral')
  )
}

/** The rarity of one card of a slot, for a roll in [0, 1). */
export function rollRarity(slot: PackSlot, roll: number): Rarity {
  let accumulated = 0
  let last: Rarity = 'common'

  for (const rarity of RARITIES) {
    const chance = slot.odds[rarity] ?? 0

    if (chance <= 0) {
      continue
    }

    accumulated += chance
    last = rarity

    if (roll < accumulated) {
      return rarity
    }
  }

  return last
}

/**
 * The rarity actually drawn when the catalog has no card of the wanted one
 * (while the catalog grows): the closest one below, or above if there is none.
 */
export function availableRarity(wanted: Rarity, byRarity: Map<Rarity, CardDefinition[]>): Rarity | null {
  const index = RARITIES.indexOf(wanted)

  for (let i = index; i >= 0; i--) {
    if (byRarity.get(RARITIES[i])?.length) {
      return RARITIES[i]
    }
  }

  for (let i = index + 1; i < RARITIES.length; i++) {
    if (byRarity.get(RARITIES[i])?.length) {
      return RARITIES[i]
    }
  }

  return null
}

/**
 * Opens a pack (docs/PLAN.md, section 11.1): each slot rolls the rarity of
 * its cards and then a card of that rarity, at random from the pool. With
 * `guarantee` (the pity of the guardian and eternal packs) a pack without a
 * legendary turns its best card into one. Deterministic for a seed.
 */
export function drawPack(
  pack: PackDefinition,
  seed: number,
  guarantee = false,
  cards: CardDefinition[] = allCards()
): PackResult {
  const byRarity = new Map<Rarity, CardDefinition[]>()

  for (const card of packPool(pack, cards)) {
    byRarity.set(card.rarity, [...(byRarity.get(card.rarity) ?? []), card])
  }

  let state = seed

  const random = () => {
    const next = nextRandom(state)

    state = next.state

    return next.value
  }

  const rarities: Rarity[] = pack.slots.flatMap((slot) =>
    Array.from({ length: slot.count }, () => rollRarity(slot, random()))
  )

  if (guarantee && !rarities.some((rarity) => RARITIES.indexOf(rarity) >= LEGENDARY)) {
    const best = rarities.reduce(
      (top, rarity, index) => (RARITIES.indexOf(rarity) >= RARITIES.indexOf(rarities[top]) ? index : top),
      0
    )

    rarities[best] = 'legendary'
  }

  const drawn: CardDefinition[] = []

  for (const wanted of rarities) {
    const rarity = availableRarity(wanted, byRarity)

    if (rarity) {
      const options = byRarity.get(rarity)!

      drawn.push(options[Math.floor(random() * options.length)])
    }
  }

  drawn.sort((a, b) => RARITIES.indexOf(a.rarity) - RARITIES.indexOf(b.rarity))

  return {
    cards: drawn.map((card) => card.id),
    hasLegendary: drawn.some((card) => RARITIES.indexOf(card.rarity) >= LEGENDARY)
  }
}
