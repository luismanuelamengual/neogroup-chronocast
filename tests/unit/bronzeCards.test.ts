import { describe, expect, it } from 'vitest'
import { match, playCard } from '@/tests/support/cardPlay'
import { place } from '@/tests/support/testCards'

/**
 * Bronce fights in formation and with its gear (docs/FACTIONS.md): cards that
 * reward allies next to each other and Panoply (a weapon and an armor on the
 * hero). A few of its cards, tried with the real catalog.
 */
describe('Bronce: formations and Panoply', () => {
  it('Barrage of the Ambush hits an enemy ally and the allies next to it', () => {
    let state = match()

    place(state, 'b', 'cyborg-champion', 0)
    place(state, 'b', 'cyborg-champion', 1)
    place(state, 'b', 'cyborg-champion', 2)
    state = playCard(state, 'barrage-of-the-ambush', [{ player: 'b', slot: 1 }])

    expect(state.players.b.allies.map((unit) => unit?.health)).toEqual([14 - 3, 14 - 6, 14 - 3, undefined, undefined])
  })

  it('Rally of the Hawk gives +2/+2 for each ally next to the target', () => {
    let state = match()

    place(state, 'a', 'neon-thug', 0)
    place(state, 'a', 'neon-thug', 1)
    place(state, 'a', 'neon-thug', 2)
    state = playCard(state, 'rally-of-the-hawk', [{ player: 'a', slot: 1 }])

    expect(state.players.a.allies[1]!.attack).toBe(4 + 4)
  })

  it('Lance of the Wilds deals more damage with Panoply', () => {
    let plain = match()

    place(plain, 'b', 'cyborg-champion', 0)
    plain = playCard(plain, 'lance-of-the-wilds', [{ player: 'b', slot: 0 }])
    expect(plain.players.b.allies[0]!.health).toBe(14 - 4)

    let armed = match()

    place(armed, 'b', 'cyborg-champion', 0)
    armed = playCard(armed, 'cutlass-of-the-long-road')
    armed = playCard(armed, 'plate-of-rage')
    armed = playCard(armed, 'lance-of-the-wilds', [{ player: 'b', slot: 0 }])
    expect(armed.players.b.allies[0]!.health).toBe(14 - 9)
  })
})
