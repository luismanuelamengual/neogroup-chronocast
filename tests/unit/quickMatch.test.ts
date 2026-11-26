import { describe, expect, it } from 'vitest'
import {
  QUICK_MATCH_HEROES,
  quickMatchHeroes,
  RANDOM_DECK_SIZE,
  randomDeck,
  randomRival
} from '@/app/(protected)/(battle)/utils/randomDeck'
import { chooseTimeline } from '@/app/(protected)/(engine)/ai/chooseTimeline'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { validateDeck } from '@/app/(protected)/(engine)/utils/deckRules'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { rarityLevel } from '@/app/(protected)/(progression)/utils/levels'

/** The cards of a random deck besides the hero: 39 to 59 (a deck of 40 to 60). */
function expectSize(cards: number) {
  expect(cards).toBeGreaterThanOrEqual(RANDOM_DECK_SIZE.min - 1)
  expect(cards).toBeLessThanOrEqual(RANDOM_DECK_SIZE.max - 1)
}

describe('quick match against the CPU', () => {
  it('the size of the deck changes from deck to deck, between 40 and 60 with the hero', () => {
    const sizes = Array.from({ length: 30 }, (_, i) => randomDeck('kora-wildfang', i * 131 + 1).cards.length + 1)

    expect(sizes.every((size) => size >= RANDOM_DECK_SIZE.min && size <= RANDOM_DECK_SIZE.max)).toBe(true)
    expect(new Set(sizes).size).toBeGreaterThan(5)
    expect(Math.max(...sizes)).toBeGreaterThan(52)
  })

  it('builds a legal deck of 40 cards for every hero, mostly allies, with cheap allies to start', () => {
    for (const heroId of QUICK_MATCH_HEROES) {
      for (let seed = 1; seed <= 5; seed++) {
        const deck = randomDeck(heroId, seed * 7919)
        const cards = deck.cards.map(getCard)
        const allies = cards.filter((card) => card.type === 'ally')

        expect(validateDeck(deck)).toEqual([])
        expectSize(deck.cards.length)
        expect(cards.some((card) => card.reward || card.boss || card.token)).toBe(false)
        expect(allies.length).toBeGreaterThanOrEqual(15)
        expect(allies.filter((card) => card.cost <= 3).length).toBeGreaterThanOrEqual(6)
      }
    }
  })

  it('the same seed builds the same deck, and the rival changes from match to match', () => {
    expect(randomDeck('kora-wildfang', 42)).toEqual(randomDeck('kora-wildfang', 42))
    expect(randomDeck('kora-wildfang', 42)).not.toEqual(randomDeck('kora-wildfang', 43))

    const rivals = Array.from({ length: 12 }, (_, i) => randomRival('legate-varro', i + 1))

    expect(rivals.every((rival) => rival.heroId !== 'legate-varro')).toBe(true)
    expect(new Set(rivals.map((rival) => rival.heroId)).size).toBeGreaterThan(3)
  })

  it('a random rival plays a whole match to the end', () => {
    for (let seed = 1; seed <= 4; seed++) {
      let { state } = createMatch({
        seed,
        decks: { a: randomRival(undefined, seed * 31), b: randomRival(undefined, seed * 97) }
      })

      while (state.status === 'planning') {
        state = resolvePhase(state, { a: chooseTimeline(state, 'a', 2), b: chooseTimeline(state, 'b', 3) }).state
      }

      expect(state.status).toBe('finished')
    }
  })

  it('the rival only plays a hero and cards of the rarities the player can buy at its level', () => {
    for (const level of [1, 5, 10, 20, 40, 100]) {
      for (let seed = 1; seed <= 8; seed++) {
        const rival = randomRival('legate-varro', seed * 7919 + level, level)

        expect(rival.heroId).not.toBe('legate-varro')
        expect(rarityLevel(getCard(rival.heroId).rarity)).toBeLessThanOrEqual(level)
        expect(rival.cards.every((id) => rarityLevel(getCard(id).rarity) <= level)).toBe(true)
        expectSize(rival.cards.length)
        expect(validateDeck(rival)).toEqual([])
      }
    }
  })

  it('every hero a level-1 player can buy gets a full legal deck of common cards', () => {
    const heroes = quickMatchHeroes(1)

    expect(heroes.length).toBeGreaterThan(1)

    for (const heroId of heroes) {
      const deck = randomDeck(heroId, 4242, 1)

      expectSize(deck.cards.length)
      expect(validateDeck(deck)).toEqual([])
      expect(deck.cards.every((id) => getCard(id).rarity === 'common')).toBe(true)
    }
  })
})
