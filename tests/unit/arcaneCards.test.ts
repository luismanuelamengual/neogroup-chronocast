import { describe, expect, it } from 'vitest'
import { match, playCard } from '@/tests/support/cardPlay'
import { place } from '@/tests/support/testCards'

/**
 * Arcana lives off its spells (docs/FACTIONS.md): spell power, freezing and
 * the spells it casts. A few of its cards, tried with the real catalog.
 */
describe('Arcana: the faction of the spells', () => {
  it('Blast of the Arcanum deals double damage to a frozen ally', () => {
    let warm = match()

    place(warm, 'b', 'cyborg-champion', 0)
    warm = playCard(warm, 'blast-of-the-arcanum', [{ player: 'b', slot: 0 }])
    expect(warm.players.b.allies[0]!.health).toBe(14 - 9)

    let cold = match()
    const frozen = place(cold, 'b', 'cyborg-champion', 0)

    frozen.frozenUntilPhase = cold.phase + 5
    cold = playCard(cold, 'blast-of-the-arcanum', [{ player: 'b', slot: 0 }])
    expect(cold.players.b.allies[0]).toBeFalsy()
  })

  it('Wise Stasis draws a card only if the ally was already frozen', () => {
    let warm = match()

    place(warm, 'b', 'cyborg-champion', 0)
    warm = playCard(warm, 'wise-stasis', [{ player: 'b', slot: 0 }])
    // Only the draw of the next phase.
    expect(warm.players.a.hand.length).toBe(1)

    let cold = match()
    const frozen = place(cold, 'b', 'cyborg-champion', 0)

    frozen.frozenUntilPhase = cold.phase + 5
    cold = playCard(cold, 'wise-stasis', [{ player: 'b', slot: 0 }])
    expect(cold.players.a.hand.length).toBe(2)
  })

  it('Arcane Mine hurts and freezes the enemy ally that is summoned', () => {
    let state = match()

    state = playCard(state, 'arcane-mine')
    state = playCard(state, 'cyborg-champion', [], 'b')

    const unit = state.players.b.allies.find(Boolean)!

    expect(unit.health).toBe(14 - 3)
    expect(unit.frozenUntilPhase ?? 0).toBeGreaterThanOrEqual(state.phase)
  })
})
