import { describe, expect, it } from 'vitest'
import { HERO_POOL_SIZE, MAX_PLAIN_CARDS, POOL_LAYER_SIZE, POOL_LAYERS } from '@/app/(protected)/(cards)/data/heroPools'
import { CARDS, HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import { heroPool, heroPoolLayers } from '@/app/(protected)/(cards)/utils/heroPool'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { ELEMENTS } from '@/app/(protected)/(engine)/models/Element'

/**
 * What a card does, with its numbers and elements left out: two cards that
 * only differ in those do the same thing (docs/PLAN.md, section 4.4).
 */
function effectOf(card: CardDefinition): string {
  const normalize = (text = '') =>
    text
      .toLowerCase()
      .replace(/\d+/g, 'N')
      .replace(new RegExp(`\\b(${ELEMENTS.join('|')})\\b`, 'g'), 'ELEMENT')
      .replace(/\s+/g, ' ')
      .trim()

  return `${normalize(card.text)} | ${normalize(card.ability?.text)}`
}

const isPlain = (card: CardDefinition) => !card.text?.trim() && !card.ability

describe('the pool of each hero (docs/PLAN.md, section 4.3)', () => {
  it(`every hero can use between ${HERO_POOL_SIZE.min} and ${HERO_POOL_SIZE.max} cards`, () => {
    const outside = HEROES.map((hero) => `${hero.id}: ${heroPool(hero).length}`).filter((entry) => {
      const size = Number(entry.split(': ')[1])

      return size < HERO_POOL_SIZE.min || size > HERO_POOL_SIZE.max
    })

    expect(outside).toEqual([])
  })

  for (const layer of POOL_LAYERS) {
    const { min, max } = POOL_LAYER_SIZE[layer]

    it(`every hero can use between ${min} and ${max} ${layer} cards`, () => {
      const outside = HEROES.map((hero) => ({ hero: hero.id, count: heroPoolLayers(hero)[layer] }))
        .filter(({ count }) => count < min || count > max)
        .map(({ hero, count }) => `${hero}: ${count}`)

      expect(outside).toEqual([])
    })
  }
})

describe('the effects of the cards (docs/PLAN.md, section 4.4)', () => {
  it('no two cards have the same effect', () => {
    const byEffect = new Map<string, string[]>()

    for (const card of CARDS.filter((candidate) => candidate.type !== 'hero' && !isPlain(candidate))) {
      const effect = effectOf(card)

      byEffect.set(effect, [...(byEffect.get(effect) ?? []), card.id])
    }

    const repeated = [...byEffect.values()].filter((ids) => ids.length > 1)

    expect(repeated).toEqual([])
  })

  it(`at most ${MAX_PLAIN_CARDS} cards have no effect, all of them neutral`, () => {
    const plain = CARDS.filter((card) => card.type !== 'hero' && isPlain(card))

    expect(plain.length).toBeLessThanOrEqual(MAX_PLAIN_CARDS)

    for (const card of plain) {
      expect(card.faction, card.id).toBe('neutral')
    }
  })
})
