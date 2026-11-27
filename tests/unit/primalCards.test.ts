import { describe, expect, it } from 'vitest'
import { match, playCard } from '@/tests/support/cardPlay'
import { place } from '@/tests/support/testCards'

/**
 * Primigenia hunts (docs/FACTIONS.md): bows, traps and Prey. A few of its
 * cards, tried with the real catalog.
 */
describe('Primigenia: the faction of the hunt', () => {
  it('Wild Shot deals double damage to a Prey', () => {
    let free = match()

    place(free, 'b', 'cyborg-champion', 0)
    free = playCard(free, 'wild-shot', [{ player: 'b', slot: 0 }])
    expect(free.players.b.allies[0]!.health).toBe(14 - 7)

    let hunted = match()
    const prey = place(hunted, 'b', 'cyborg-champion', 0)

    prey.prey = { by: 'a', untilPhase: hunted.phase + 5 }
    hunted = playCard(hunted, 'wild-shot', [{ player: 'b', slot: 0 }])
    expect(hunted.players.b.allies[0]).toBeFalsy()
  })

  it('Net of Ice freezes the summoned enemy ally and marks it as Prey', () => {
    let state = match()

    state = playCard(state, 'net-of-ice')
    state = playCard(state, 'cyborg-champion', [], 'b')

    const unit = state.players.b.allies.find(Boolean)!

    expect(unit.frozenUntilPhase ?? 0).toBeGreaterThanOrEqual(state.phase + 1)
    expect(unit.prey?.by).toBe('a')
  })

  it('Thundering Gatherer draws a card when a trap of its owner goes off', () => {
    let state = match()

    place(state, 'a', 'thundering-gatherer', 0)
    state = playCard(state, 'patented-tripwire')

    const before = state.players.a.hand.length

    state = playCard(state, 'cyborg-champion', [], 'b')
    // The draw of the trap, and the one of the next phase.
    expect(state.players.a.hand.length).toBe(before + 2)
  })
})
