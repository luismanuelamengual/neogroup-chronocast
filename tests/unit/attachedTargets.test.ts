import '@/app/(protected)/(cards)/utils/catalog'
import { describe, expect, it } from 'vitest'
import { refsFor } from '@/app/(protected)/(battle)/utils/targets'
import { MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { WAIT } from '@/app/(protected)/(engine)/models/PlannedAction'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { give, place, testMatch, timeline } from '@/tests/support/testCards'

/** A match where the rival's hero has a weapon and an armor, and both players have Chronos to spare. */
function armedMatch(): { state: MatchState; weapon: number; armor: number } {
  const state = testMatch()
  const weapon = state.nextUid++
  const armor = state.nextUid++

  state.players.a.chronos = 10
  state.players.b.chronos = 10
  state.players.b.hero.weapon = { card: { uid: weapon, cardId: 'test-sword' }, attack: 10, durability: 2 }
  state.players.b.hero.armor = { card: { uid: armor, cardId: 'test-plate' }, reduction: 3, durability: 2 }

  return { state, weapon, armor }
}

function fails(events: MatchEvent[]) {
  return events.flatMap((event) => (event.type === 'fail' ? [event.reason] : []))
}

describe('aiming at an attached card', () => {
  it('a weapon-or-armor card destroys the one chosen, and leaves the other', () => {
    const { state, weapon, armor } = armedMatch()
    const scroll = give(state, 'a', 'clever-scroll')
    const result = resolvePhase(state, {
      a: timeline({ kind: 'play', cardUid: scroll.uid, targets: [{ player: 'b', slot: 'hero', attached: armor }] }),
      b: timeline()
    })

    expect(fails(result.events)).toEqual([])
    expect(result.state.players.b.hero.armor).toBeNull()
    expect(result.state.players.b.hero.weapon?.card.uid).toBe(weapon)
    expect(result.state.players.b.discard.map((card) => card.uid)).toContain(armor)
  })

  it('the same card can go for the weapon instead', () => {
    const { state, weapon, armor } = armedMatch()
    const scroll = give(state, 'a', 'clever-scroll')
    const result = resolvePhase(state, {
      a: timeline({ kind: 'play', cardUid: scroll.uid, targets: [{ player: 'b', slot: 'hero', attached: weapon }] }),
      b: timeline()
    })

    expect(result.state.players.b.hero.weapon).toBeNull()
    expect(result.state.players.b.hero.armor?.card.uid).toBe(armor)
  })

  it('fails without a card attached there: no target, an unknown card, or its own gear', () => {
    const { state, weapon } = armedMatch()
    const cards = [
      give(state, 'a', 'clever-scroll'),
      give(state, 'a', 'clever-scroll'),
      give(state, 'a', 'clever-scroll')
    ]

    state.players.a.chronos = 20

    const result = resolvePhase(state, {
      a: timeline(
        { kind: 'play', cardUid: cards[0].uid, targets: [{ player: 'b', slot: 'hero' }] },
        { kind: 'play', cardUid: cards[1].uid, targets: [{ player: 'b', slot: 'hero', attached: 9999 }] },
        { kind: 'play', cardUid: cards[2].uid, targets: [{ player: 'a', slot: 'hero', attached: weapon }] }
      ),
      b: timeline()
    })

    expect(fails(result.events)).toEqual(['invalidTarget', 'invalidTarget', 'invalidTarget'])
    expect(result.state.players.b.hero.weapon).not.toBeNull()
  })

  it('an attachment of an enemy ally is destroyed, and the ally loses what it gave', () => {
    const { state, weapon } = armedMatch()
    const unit = place(state, 'b', 'test-soldier', 0)
    const blade = give(state, 'b', 'test-blade')
    const sabotage = give(state, 'a', 'armored-sabotage')
    const result = resolvePhase(state, {
      a: timeline(WAIT, {
        kind: 'play',
        cardUid: sabotage.uid,
        targets: [{ player: 'b', slot: 0, attached: blade.uid }]
      }),
      b: timeline({ kind: 'play', cardUid: blade.uid, targets: [{ player: 'b', slot: 0 }] })
    })
    const after = result.state.players.b.allies[0]!

    expect(fails(result.events)).toEqual([])
    expect(after.uid).toBe(unit.uid)
    expect(after.attachments).toEqual([])
    expect(after.attack).toBe(10)
    expect(after.keywords).not.toContain('guardian')
    expect(result.state.players.b.discard.map((card) => card.uid)).toContain(blade.uid)
    // The hero's gear is untouched.
    expect(result.state.players.b.hero.weapon?.card.uid).toBe(weapon)
  })

  it("a curse of the player's own on an enemy ally goes back to that player's discard pile", () => {
    const { state } = armedMatch()

    place(state, 'b', 'test-soldier', 0)

    const curse = give(state, 'a', 'test-curse')
    const sabotage = give(state, 'a', 'armored-sabotage')
    const result = resolvePhase(state, {
      a: timeline(
        { kind: 'play', cardUid: curse.uid, targets: [{ player: 'b', slot: 0 }] },
        { kind: 'play', cardUid: sabotage.uid, targets: [{ player: 'b', slot: 0, attached: curse.uid }] }
      ),
      b: timeline()
    })

    expect(fails(result.events)).toEqual([])
    expect(result.state.players.b.allies[0]!.attack).toBe(10)
    expect(result.state.players.a.discard.map((card) => card.uid)).toContain(curse.uid)
  })

  it('a weapon-or-armor card cannot aim at an ally attachment', () => {
    const { state } = armedMatch()

    place(state, 'b', 'test-soldier', 0)

    const blade = give(state, 'b', 'test-blade')
    const scroll = give(state, 'a', 'clever-scroll')
    const result = resolvePhase(state, {
      a: timeline(WAIT, {
        kind: 'play',
        cardUid: scroll.uid,
        targets: [{ player: 'b', slot: 0, attached: blade.uid }]
      }),
      b: timeline({ kind: 'play', cardUid: blade.uid, targets: [{ player: 'b', slot: 0 }] })
    })

    expect(fails(result.events)).toEqual(['invalidTarget'])
    expect(result.state.players.b.allies[0]!.attachments).toHaveLength(1)
  })

  it('the battle screen offers one target per attached card (none behind stealth)', () => {
    const { state, weapon, armor } = armedMatch()
    const soldier = place(state, 'b', 'test-soldier', 0)
    const hidden = place(state, 'b', 'test-soldier', 1)

    soldier.attachments = [{ uid: 501, cardId: 'test-blade', owner: 'b' }]
    hidden.attachments = [{ uid: 502, cardId: 'test-blade', owner: 'b' }]
    hidden.keywords.push('stealth')

    expect(refsFor(state, 'a', 'enemyGear')).toEqual([
      { player: 'b', slot: 'hero', attached: weapon },
      { player: 'b', slot: 'hero', attached: armor }
    ])
    expect(refsFor(state, 'a', 'enemyAttachment')).toEqual([
      { player: 'b', slot: 'hero', attached: weapon },
      { player: 'b', slot: 'hero', attached: armor },
      { player: 'b', slot: 0, attached: 501 }
    ])
  })
})
