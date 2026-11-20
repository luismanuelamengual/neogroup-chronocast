import '@/app/(protected)/(cards)/utils/catalog'
import { describe, expect, it } from 'vitest'
import { starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { canUseCard, validateDeck } from '@/app/(protected)/(engine)/utils/deckRules'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

const VARRO = 'legate-varro'

function deckOf(cards: string[]) {
  return { heroId: VARRO, cards }
}

describe('canUseCard', () => {
  const varro = getCard(VARRO)

  it('follows the restriction of each card', () => {
    expect(canUseCard(varro, getCard('time-wanderer'))).toBe(true) // any
    expect(canUseCard(varro, getCard('bronze-legionary'))).toBe(true) // its faction
    expect(canUseCard(varro, getCard('apprentice-mage'))).toBe(false) // another faction
    expect(canUseCard(varro, getCard('iron-gladius'))).toBe(true) // its class
    expect(canUseCard(varro, getCard('fireball'))).toBe(false) // another class
    expect(canUseCard(varro, getCard('ilyra-starweaver'))).toBe(false) // a hero
  })
})

describe('validateDeck', () => {
  const legal = starterDeck(VARRO).cards

  it('accepts a legal deck', () => {
    expect(validateDeck(deckOf(legal))).toEqual([])
  })

  it('needs 40 cards counting the hero, and at most 200', () => {
    expect(validateDeck(deckOf(legal.slice(1)))).toEqual([{ code: 'tooFewCards', count: 39, min: 40 }])

    const huge = Array.from({ length: 50 }, () => legal)
      .flat()
      .slice(0, 200)

    expect(validateDeck(deckOf(huge))).toContainEqual({ code: 'tooManyCards', count: 201, max: 200 })
  })

  it('allows at most 4 copies of a card', () => {
    const cards = [
      ...legal.filter((cardId) => cardId !== 'chrono-golem'),
      ...Array.from({ length: 5 }, () => 'chrono-golem')
    ]

    expect(validateDeck(deckOf(cards))).toEqual([{ code: 'tooManyCopies', cardId: 'chrono-golem', count: 5, max: 4 }])
  })

  it('rejects cards the hero cannot use, heroes inside the deck and unknown cards', () => {
    const cards = [...legal.slice(3), 'fireball', 'kora-wildfang', 'no-such-card']
    const codes = validateDeck(deckOf(cards)).map((problem) => problem.code)

    expect(codes).toEqual(expect.arrayContaining(['restricted', 'heroInDeck', 'unknownCard']))
  })

  it('needs a hero as the hero of the deck', () => {
    expect(validateDeck({ heroId: 'chrono-golem', cards: legal }).map((problem) => problem.code)).toContain('notAHero')
    expect(validateDeck({ heroId: 'nobody', cards: legal })).toEqual([{ code: 'unknownCard', cardId: 'nobody' }])
  })
})
