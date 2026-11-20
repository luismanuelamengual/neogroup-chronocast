import { describe, expect, it } from 'vitest'
import { CARDS } from '@/app/(protected)/(cards)/utils/catalog'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { Faction } from '@/app/(protected)/(engine)/models/Faction'
import { RARITIES, Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { findPack, PACK_SIZE, PackDefinition, PACKS } from '@/app/(protected)/(shop)/data/packs'
import { UNLOCK_COSTS } from '@/app/(protected)/(shop)/data/prices'
import { availableRarity, drawPack, packPool, rollRarity } from '@/app/(protected)/(shop)/utils/drawPack'
import { slotOdds } from '@/app/(protected)/(shop)/utils/odds'
import {
  copyLimit,
  isBuyable,
  nextUnlock,
  quickSellPlan,
  sellPrice,
  unlockedRarities
} from '@/app/(protected)/(shop)/utils/prices'

/** A full fake catalog: 3 cards of every rarity in two factions and neutral, plus a hero and a reward. */
function fakeCatalog(): CardDefinition[] {
  const cards: CardDefinition[] = []

  for (const rarity of RARITIES) {
    for (const faction of ['bronze', 'arcane', 'neutral'] as Faction[]) {
      cards.push({
        id: `${rarity}-${faction}`,
        type: 'ally',
        name: `${rarity} ${faction}`,
        text: '',
        faction,
        restriction: { kind: 'any' },
        rarity,
        price: 100,
        cost: 1,
        attack: 1,
        health: 1,
        art: { subject: 'test' }
      })
    }
  }

  cards.push({ ...cards[0], id: 'some-hero', type: 'hero', price: undefined })
  cards.push({ ...cards[0], id: 'some-reward', reward: true })

  return cards
}

const FAKE = fakeCatalog()
const rarityOf = (id: string): Rarity => FAKE.find((card) => card.id === id)!.rarity
const rank = (rarity: Rarity) => RARITIES.indexOf(rarity)

function pack(id: string): PackDefinition {
  return findPack(id)!
}

describe('pack definitions', () => {
  it('every pack has 8 cards and the odds of each slot add up to 100 %', () => {
    for (const definition of PACKS) {
      expect(
        definition.slots.reduce((sum, slot) => sum + slot.count, 0),
        definition.id
      ).toBe(PACK_SIZE)

      for (const slot of definition.slots) {
        const total = Object.values(slot.odds).reduce((sum, chance) => sum + chance, 0)

        expect(total, definition.id).toBeCloseTo(1, 6)
      }
    }
  })

  it('has the prices of the plan, with the guarantee only on guardian and eternal', () => {
    expect(
      PACKS.filter((definition) => !definition.faction).map((definition) => [definition.id, definition.price])
    ).toEqual([
      ['traveler', 300],
      ['chronicler', 800],
      ['guardian', 2000],
      ['eternal', 5000]
    ])
    expect(PACKS.filter((definition) => definition.faction).every((definition) => definition.price === 1000)).toBe(true)
    expect(PACKS.filter((definition) => definition.pity).map((definition) => definition.id)).toEqual([
      'guardian',
      'eternal'
    ])
  })

  it('shows the odds of a slot in percent', () => {
    expect(slotOdds(pack('chronicler').slots[2])).toEqual([
      { rarity: 'rare', percent: 80 },
      { rarity: 'epic', percent: 16 },
      { rarity: 'legendary', percent: 4 }
    ])
  })
})

describe('drawing a pack', () => {
  it('rolls the rarity of a slot by its odds', () => {
    const slot = pack('chronicler').slots[2]

    expect(rollRarity(slot, 0)).toBe('rare')
    expect(rollRarity(slot, 0.799)).toBe('rare')
    expect(rollRarity(slot, 0.8)).toBe('epic')
    expect(rollRarity(slot, 0.97)).toBe('legendary')
    expect(rollRarity(slot, 0.99999)).toBe('legendary')
  })

  it('is deterministic for a seed, and brings 8 cards from the lowest rarity to the highest', () => {
    const first = drawPack(pack('guardian'), 1234, false, FAKE)

    expect(drawPack(pack('guardian'), 1234, false, FAKE)).toEqual(first)
    expect(first.cards).toHaveLength(8)

    const ranks = first.cards.map((id) => rank(rarityOf(id)))

    expect(ranks).toEqual([...ranks].sort((a, b) => a - b))
  })

  it('respects what each pack always brings', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const traveler = drawPack(pack('traveler'), seed, false, FAKE).cards.map(rarityOf)
      const chronicler = drawPack(pack('chronicler'), seed, false, FAKE).cards.map(rarityOf)
      const eternal = drawPack(pack('eternal'), seed, false, FAKE).cards.map(rarityOf)

      expect(traveler.filter((rarity) => rarity === 'common')).toHaveLength(6)
      expect(traveler.every((rarity) => rank(rarity) <= rank('rare'))).toBe(true)
      expect(chronicler.filter((rarity) => rank(rarity) >= rank('rare'))).toHaveLength(1)
      expect(eternal.filter((rarity) => rarity === 'legendary').length).toBeGreaterThanOrEqual(2)
      expect(eternal.filter((rarity) => rank(rarity) >= rank('exotic'))).toHaveLength(1)
    }
  })

  it('draws close to the published odds', () => {
    const counts: Partial<Record<Rarity, number>> = {}
    const packs = 4000

    for (let seed = 1; seed <= packs; seed++) {
      const best = drawPack(pack('chronicler'), seed * 7919, false, FAKE)
        .cards.map(rarityOf)
        .at(-1)!

      counts[best] = (counts[best] ?? 0) + 1
    }

    expect((counts.rare ?? 0) / packs).toBeGreaterThan(0.77)
    expect((counts.rare ?? 0) / packs).toBeLessThan(0.83)
    expect((counts.epic ?? 0) / packs).toBeGreaterThan(0.13)
    expect((counts.epic ?? 0) / packs).toBeLessThan(0.19)
    expect((counts.legendary ?? 0) / packs).toBeGreaterThan(0.025)
    expect((counts.legendary ?? 0) / packs).toBeLessThan(0.055)
  })

  it('with the guarantee, a pack always brings a legendary', () => {
    for (let seed = 1; seed <= 200; seed++) {
      const plain = drawPack(pack('guardian'), seed, false, FAKE)
      const guaranteed = drawPack(pack('guardian'), seed, true, FAKE)

      expect(guaranteed.hasLegendary).toBe(true)

      if (plain.hasLegendary) {
        expect(guaranteed).toEqual(plain)
      }
    }
  })

  it('never brings heroes nor campaign rewards, and faction packs only bring their faction and neutrals', () => {
    expect(packPool(pack('traveler'), FAKE).some((card) => card.id === 'some-hero' || card.id === 'some-reward')).toBe(
      false
    )

    for (let seed = 1; seed <= 100; seed++) {
      const cards = drawPack(pack('faction-bronze'), seed, false, FAKE).cards

      expect(cards.every((id) => id.endsWith('-bronze') || id.endsWith('-neutral'))).toBe(true)
    }
  })

  it('falls back to the closest rarity below when the catalog has none of the one drawn', () => {
    const byRarity = new Map<Rarity, CardDefinition[]>([
      ['common', [FAKE[0]]],
      ['rare', [FAKE[6]]]
    ])

    expect(availableRarity('epic', byRarity)).toBe('rare')
    expect(availableRarity('uncommon', byRarity)).toBe('common')
    expect(availableRarity('common', new Map([['rare', [FAKE[6]]]]))).toBe('rare')
  })

  it('works with the real catalog, whatever rarities it has today', () => {
    for (const definition of PACKS) {
      const result = drawPack(definition, 99)

      expect(result.cards, definition.id).toHaveLength(8)
      expect(result.cards.every((id) => isBuyable(CARDS.find((card) => card.id === id)!))).toBe(true)
    }
  })
})

describe('prices, unlocks and selling', () => {
  it('sells a card for 15 % of its price, rounded', () => {
    expect(sellPrice({ ...FAKE[0], price: 60 })).toBe(9)
    expect(sellPrice({ ...FAKE[0], price: 45 })).toBe(7)
    expect(sellPrice({ ...FAKE[0], price: 5000 })).toBe(750)
  })

  it('unlocks the rarities in order, each one for its cost', () => {
    expect(unlockedRarities([])).toEqual(['common'])
    expect(unlockedRarities(['uncommon', 'epic'])).toEqual(['common', 'uncommon'])
    expect(nextUnlock(['common'])).toEqual({ rarity: 'uncommon', cost: 1000 })
    expect(nextUnlock(['common', 'uncommon'])).toEqual({ rarity: 'rare', cost: 3000 })
    expect(nextUnlock([...RARITIES])).toBeNull()
    expect(Object.values(UNLOCK_COSTS)).toEqual([0, 1000, 3000, 8000, 20000, 50000, 100000])
  })

  it('every card for sale has a price; heroes and campaign rewards are never for sale', () => {
    for (const card of CARDS) {
      expect(isBuyable(card), card.id).toBe(card.type !== 'hero' && !card.reward)
    }
  })

  it('quick sell keeps 4 copies (1 of a unique card) and whatever a saved deck uses', () => {
    const plan = quickSellPlan(
      { 'time-wanderer': 7, 'rift-scavenger': 9, 'chrono-golem': 3, 'legate-varro': 2 },
      { 'rift-scavenger': 6 }
    )

    expect(plan.cards).toEqual({ 'time-wanderer': 3, 'rift-scavenger': 3 })
    expect(copyLimit({ ...FAKE[0], keywords: ['unique'] })).toBe(1)
    expect(copyLimit(FAKE[0])).toBe(4)
    expect(plan.gold).toBe(
      3 * sellPrice(CARDS.find((card) => card.id === 'time-wanderer')!) +
        3 * sellPrice(CARDS.find((card) => card.id === 'rift-scavenger')!)
    )
  })
})
