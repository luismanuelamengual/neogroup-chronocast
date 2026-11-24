import { describe, expect, it } from 'vitest'
import { QUICK_MATCH_HEROES, randomDeck, randomRival } from '@/app/(protected)/(battle)/utils/randomDeck'
import { chooseTimeline } from '@/app/(protected)/(engine)/ai/chooseTimeline'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { validateDeck } from '@/app/(protected)/(engine)/utils/deckRules'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'

describe('quick match against the CPU', () => {
  it('builds a legal deck of 40 cards for every hero, mostly allies, with cheap allies to start', () => {
    for (const heroId of QUICK_MATCH_HEROES) {
      for (let seed = 1; seed <= 5; seed++) {
        const deck = randomDeck(heroId, seed * 7919)
        const cards = deck.cards.map(getCard)
        const allies = cards.filter((card) => card.type === 'ally')

        expect(validateDeck(deck)).toEqual([])
        expect(deck.cards).toHaveLength(39)
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
})
