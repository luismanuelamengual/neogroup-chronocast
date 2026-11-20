import '@/app/(protected)/(cards)/utils/catalog'
import { describe, expect, it } from 'vitest'
import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { planTimeline } from '@/app/(protected)/(engine)/ai/planTimeline'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { projectTimeline } from '@/app/(protected)/(engine)/utils/projectTimeline'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { playMatch } from '@/scripts/duel'

describe('the computer player', () => {
  it('plans 5 actions that never fail on their own', () => {
    for (const [index, heroA] of STARTER_HERO_IDS.entries()) {
      const heroB = STARTER_HERO_IDS[(index + 1) % STARTER_HERO_IDS.length]
      let { state } = createMatch({ seed: index + 1, decks: { a: starterDeck(heroA), b: starterDeck(heroB) } })

      for (let phase = 0; phase < 6 && state.status === 'planning'; phase++) {
        const timeline = planTimeline(state, 'a')

        expect(timeline).toHaveLength(5)
        expect(projectTimeline(state, 'a', timeline).failures).toEqual([])

        state = resolvePhase(state, { a: timeline, b: planTimeline(state, 'b') }).state
      }
    }
  })

  it('is deterministic', () => {
    const { state } = createMatch({
      seed: 5,
      decks: { a: starterDeck(STARTER_HERO_IDS[0]), b: starterDeck(STARTER_HERO_IDS[1]) }
    })

    expect(planTimeline(state, 'a')).toEqual(planTimeline(state, 'a'))
  })

  it('finishes matches against itself', () => {
    const finished: MatchState[] = []

    for (let seed = 1; seed <= 6; seed++) {
      finished.push(playMatch(STARTER_HERO_IDS[seed % 3], STARTER_HERO_IDS[(seed + 1) % 3], seed))
    }

    for (const state of finished) {
      expect(state.status).toBe('finished')
      expect(state.phase).toBeLessThanOrEqual(30)
    }

    // Most matches end with a fallen hero, not at the phase limit.
    expect(finished.filter((state) => state.result?.reason === 'hero').length).toBeGreaterThanOrEqual(4)
  })
})
