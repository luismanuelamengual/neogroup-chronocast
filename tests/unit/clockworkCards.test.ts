import { describe, expect, it } from 'vitest'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { match, playCard } from '@/tests/support/cardPlay'
import { place } from '@/tests/support/testCards'

/**
 * Relojería is the faction of the artifacts (docs/FACTIONS.md): most of its
 * cards grow with the artifacts in play, recharge them or scrap them. A few of
 * its cards, tried with the real catalog.
 */
function withArtifacts(state: MatchState, count: number): void {
  for (let index = 0; index < count; index++) {
    state.players.a.artifacts.push({ uid: state.nextUid++, cardId: 'pressure-valve' })
  }
}

describe('Relojería: the faction of the artifacts', () => {
  it('Clockwork Assembler grows with each artifact of yours', () => {
    let state = match()

    withArtifacts(state, 3)
    state = playCard(state, 'clockwork-assembler')

    const unit = state.players.a.allies.find(Boolean)!

    expect(unit.attack).toBe(4 + 3)
    expect(unit.maxHealth).toBe(9 + 3)
  })

  it('Total Overclock scraps every artifact: 2 damage to the enemy hero and a card for each one', () => {
    let state = match()
    const health = state.players.b.hero.health

    withArtifacts(state, 2)
    state = playCard(state, 'overclock-gadget')

    expect(state.players.a.artifacts).toEqual([])
    expect(state.players.b.hero.health).toBe(health - 4)
  })

  it('Steam Turret hits the enemy ally with the most attack', () => {
    let state = match()

    place(state, 'b', 'neon-thug', 0)
    place(state, 'b', 'cyborg-champion', 1)
    state = playCard(state, 'steam-turret')

    expect(state.players.b.allies[0]!.health).toBe(10)
    expect(state.players.b.allies[1]!.health).toBe(14 - 2)
  })
})
