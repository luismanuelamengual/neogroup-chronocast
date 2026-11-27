import { describe, expect, it } from 'vitest'
import { isEnhanced } from '@/app/(protected)/(engine)/effects'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { match, play, playCard } from '@/tests/support/cardPlay'
import { give, place } from '@/tests/support/testCards'

/**
 * Neón is the faction of the attachments (docs/FACTIONS.md): implants that
 * upgrade its allies and cards that reward having Enhanced allies. A few of
 * its cards, tried with the real catalog.
 */
function implant(state: MatchState, cardId: string, slot: number): MatchState {
  return playCard(state, cardId, [{ player: 'a', slot }])
}

describe('Neón: the faction of the attachments', () => {
  it('an implant makes its ally Enhanced and gives it its stats and keywords', () => {
    const state = match()

    place(state, 'a', 'cyber-hound-of-the-grid', 0)

    const next = implant(state, 'subdermal-mesh', 0)
    const unit = next.players.a.allies[0]!

    expect(isEnhanced(unit)).toBe(true)
    expect(unit.health).toBe(10)
  })

  it('Weary Plan draws one card for each Enhanced ally', () => {
    let state = match()

    place(state, 'a', 'cyber-hound-of-the-grid', 0)
    place(state, 'a', 'neon-thug', 1)
    state = implant(state, 'optic-implant', 0)
    state = implant(state, 'servo-legs', 1)

    const hand = state.players.a.hand.length
    const plan = give(state, 'a', 'weary-plan')
    const next = play(state, plan.uid)

    // Two cards come in, and one more with the start of the next phase.
    expect(next.players.a.hand.length).toBe(hand + 2 + 1)
  })

  it('Hostile Firmware destroys the attachments of an enemy ally and deals 3 damage for each one', () => {
    let state = match()

    place(state, 'b', 'cyborg-champion', 0)
    state = play(state, give(state, 'b', 'subdermal-mesh').uid, [{ player: 'b', slot: 0 }], 'b')
    state = play(state, give(state, 'b', 'servo-legs').uid, [{ player: 'b', slot: 0 }], 'b')
    expect(state.players.b.allies[0]!.attachments).toHaveLength(2)

    state = play(state, give(state, 'a', 'hostile-firmware').uid, [{ player: 'b', slot: 0 }])

    const unit = state.players.b.allies[0]!

    // 14 health, without the 6 of its implants, minus 3 damage for each of the 2.
    expect(unit.attachments ?? []).toEqual([])
    expect(unit.health).toBe(14 - 6)
  })

  it('Snare of the Rift stuns only the enemy allies that have an attachment', () => {
    let state = match()
    const upgraded = place(state, 'b', 'neon-thug', 0)

    place(state, 'b', 'neon-thug', 1)
    upgraded.attachments = [{ uid: state.nextUid++, cardId: 'servo-legs' }]

    state = play(state, give(state, 'a', 'snare-of-the-rift').uid)

    expect(state.players.b.allies[0]!.stunnedUntilPhase).toBeGreaterThan(state.players.b.allies[1]!.stunnedUntilPhase)
  })

  it('Memory Core draws 2 cards when its ally dies', () => {
    let state = match()

    place(state, 'a', 'cyber-hound-of-the-grid', 0)
    state = implant(state, 'memory-core', 0)

    const hand = state.players.a.hand.length

    state = play(state, give(state, 'b', 'neural-hijack').uid, [{ player: 'a', slot: 0 }], 'b')

    expect(state.players.a.allies[0]).toBeFalsy()
    // Two cards, and one more with the start of the next phase.
    expect(state.players.a.hand.length).toBe(hand + 2 + 1)
  })
})
