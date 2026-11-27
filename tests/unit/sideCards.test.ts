import { describe, expect, it } from 'vitest'
import { match, playCard } from '@/tests/support/cardPlay'
import { place } from '@/tests/support/testCards'

/**
 * The side cards have the personality of their side (docs/PLAN.md, section
 * 4.3): the Dawn heals and protects, the Eclipse pays with its hero's health
 * and poisons. A few of them, tried with the real catalog.
 */
describe('the cards of each side', () => {
  it('Prayer of Renewal (Dawn) heals every ally of its owner completely', () => {
    let state = match()
    const hurt = place(state, 'a', 'cyborg-champion', 0)

    hurt.health = 3
    state = playCard(state, 'prayer-of-renewal')

    expect(state.players.a.allies[0]!.health).toBe(14)
  })

  it('Soul Leech (Eclipse) hurts an enemy ally and heals its hero', () => {
    let state = match()

    place(state, 'b', 'cyborg-champion', 0)
    state.players.a.hero.health -= 10

    const health = state.players.a.hero.health

    state = playCard(state, 'soul-leech', [{ player: 'b', slot: 0 }])

    expect(state.players.b.allies[0]!.health).toBe(14 - 4)
    expect(state.players.a.hero.health).toBe(health + 4)
  })

  it('Toxic Cloud (Eclipse) poisons the allies of both sides', () => {
    let state = match()

    place(state, 'a', 'cyborg-champion', 0)
    place(state, 'b', 'cyborg-champion', 0)
    state = playCard(state, 'toxic-cloud')

    // 3 poison, taken at the start of the next phase.
    expect(state.players.a.allies[0]!.health).toBe(14 - 3)
    expect(state.players.b.allies[0]!.health).toBe(14 - 3)
  })
})
