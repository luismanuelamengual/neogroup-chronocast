import '@/app/(protected)/(cards)/utils/catalog'
import { describe, expect, it } from 'vitest'
import { starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { Restriction } from '@/app/(protected)/(engine)/models/Restriction'
import { canUseCard, validateDeck } from '@/app/(protected)/(engine)/utils/deckRules'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

const VARRO = 'legate-varro'

function deckOf(cards: string[]) {
  return { heroId: VARRO, cards }
}

describe('canUseCard', () => {
  const varro = getCard(VARRO)

  it('follows the restriction of each card', () => {
    expect(canUseCard(varro, getCard('bold-gust'))).toBe(true) // any
    expect(canUseCard(varro, getCard('laureled-dream-reader'))).toBe(true) // its faction
    expect(canUseCard(varro, getCard('arcane-runecarver'))).toBe(false) // another faction
    expect(canUseCard(varro, getCard('armored-mace'))).toBe(true) // its class
    expect(canUseCard(varro, getCard('astral-bolt'))).toBe(false) // another class
    expect(canUseCard(varro, getCard('ilyra-starweaver'))).toBe(false) // a hero
  })

  it('combines criteria: a hero must pass every one, matching any of its values', () => {
    // Varro: Bronze, Dawn, Warrior.
    const card = (restriction: Restriction) => ({ ...getCard('bold-gust'), restriction })

    expect(canUseCard(varro, card({ factions: ['bronze'], sides: ['dawn'], classes: ['warrior'] }))).toBe(true)
    expect(canUseCard(varro, card({ factions: ['bronze'], sides: ['eclipse'], classes: ['warrior'] }))).toBe(false)
    expect(canUseCard(varro, card({ factions: ['bronze'], classes: ['mage'] }))).toBe(false)
    expect(canUseCard(varro, card({ factions: ['clockwork', 'bronze'] }))).toBe(true)
    expect(canUseCard(varro, card({ classes: ['mage', 'hunter'] }))).toBe(false)
    expect(canUseCard(varro, card({ sides: ['dawn'], heroes: [VARRO, 'ada-copperwick'] }))).toBe(true)
    expect(canUseCard(varro, card({ sides: ['eclipse'], heroes: [VARRO] }))).toBe(false)
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
      ...legal.filter((cardId) => cardId !== 'lost-chrononaut'),
      ...Array.from({ length: 5 }, () => 'lost-chrononaut')
    ]

    expect(validateDeck(deckOf(cards))).toEqual([
      { code: 'tooManyCopies', cardId: 'lost-chrononaut', count: 5, max: 4 }
    ])
  })

  it('rejects cards the hero cannot use, heroes inside the deck and unknown cards', () => {
    const cards = [...legal.slice(3), 'astral-bolt', 'kora-wildfang', 'no-such-card']
    const codes = validateDeck(deckOf(cards)).map((problem) => problem.code)

    expect(codes).toEqual(expect.arrayContaining(['restricted', 'heroInDeck', 'unknownCard']))
  })

  it('needs a hero as the hero of the deck', () => {
    expect(validateDeck({ heroId: 'lost-chrononaut', cards: legal }).map((problem) => problem.code)).toContain(
      'notAHero'
    )
    expect(validateDeck({ heroId: 'nobody', cards: legal })).toEqual([{ code: 'unknownCard', cardId: 'nobody' }])
  })
})
