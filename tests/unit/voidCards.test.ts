import { describe, expect, it } from 'vitest'
import { fillDiscard, match, playCard } from '@/tests/support/cardPlay'
import { place } from '@/tests/support/testCards'

/**
 * Vacío lives off its discard pile (docs/FACTIONS.md): it consumes it to pay
 * for its effects, brings allies back and grows when enemy allies die. A few
 * of its cards, tried with the real catalog.
 */
describe('Vacío: the faction of the discard pile', () => {
  it('Pale Voidcaller grows only if it can consume 3 cards of the discard pile', () => {
    let empty = match()

    empty = playCard(empty, 'pale-voidcaller')
    expect(empty.players.a.allies.find(Boolean)!.attack).toBe(8)

    let full = match()

    fillDiscard(full, 'a', 'forsaken-zombie', 4)
    full = playCard(full, 'pale-voidcaller')
    expect(full.players.a.allies.find(Boolean)!.attack).toBe(12)
    expect(full.players.a.discard.length).toBeLessThanOrEqual(2)
  })

  it('Sting of the Silent Trail doubles the poison of every enemy ally', () => {
    let state = match()
    const victim = place(state, 'b', 'neon-thug', 0)

    victim.poison = 3
    state = playCard(state, 'sting-of-the-silent-trail')

    // Doubled to 6, and the start of the next phase takes 6 health and drops it to 5.
    expect(state.players.b.allies[0]!.health).toBe(10 - 6)
  })

  it('Grave Pact sacrifices an ally of yours and hits a random enemy ally with its attack', () => {
    let state = match()

    place(state, 'a', 'pale-voidcaller', 0)
    place(state, 'b', 'cyborg-champion', 0)
    state = playCard(state, 'grave-pact', [{ player: 'a', slot: 0 }])

    expect(state.players.a.allies[0]).toBeFalsy()
    expect(state.players.b.allies[0]!.health).toBe(14 - 8)
  })

  it('Deathless Sentinel comes back when it dies, if it can consume 3 cards', () => {
    let state = match()

    place(state, 'a', 'deathless-sentinel', 0)
    fillDiscard(state, 'a', 'forsaken-zombie', 3)
    state = playCard(state, 'neural-hijack', [{ player: 'a', slot: 0 }], 'b')

    expect(state.players.a.allies.some((unit) => unit?.cardId === 'deathless-sentinel')).toBe(true)
  })
})
