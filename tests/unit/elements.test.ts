import { describe, expect, it } from 'vitest'
import { Element } from '@/app/(protected)/(engine)/models/Element'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { MatchEngine } from '@/app/(protected)/(engine)/utils/engine'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { place, testMatch, timeline } from '@/tests/support/testCards'

const HERO_B = { player: 'b', slot: 'hero' } as const

/** Deals damage of an element from player A and lands it. */
function hit(state: MatchState, target: SlotRef, amount: number, element?: Element): MatchEngine {
  const engine = new MatchEngine(state)

  engine.damage(target, amount, { player: 'a', element })
  engine.flush()

  return engine
}

describe('elements of damage', () => {
  it('physical damage has no extra rule', () => {
    const state = testMatch()

    place(state, 'b', 'test-soldier', 0)
    hit(state, { player: 'b', slot: 0 }, 5)

    expect(state.players.b.allies[0]!.health).toBe(15)
    expect(state.players.b.allies[0]!.burn ?? 0).toBe(0)
  })

  it('fire leaves the target burning', () => {
    const state = testMatch()

    place(state, 'b', 'test-soldier', 0)
    hit(state, { player: 'b', slot: 0 }, 5, 'fire')

    expect(state.players.b.allies[0]!.health).toBe(15)
    expect(state.players.b.allies[0]!.burn).toBe(1)
    expect(state.players.b.allies[0]!.burnPhases).toBe(2)
  })

  it('resistances halve and vulnerabilities double', () => {
    const state = testMatch()

    place(state, 'b', 'test-drake', 0)
    hit(state, { player: 'b', slot: 0 }, 5, 'fire')
    expect(state.players.b.allies[0]!.health).toBe(17)

    hit(state, { player: 'b', slot: 0 }, 4, 'ice')
    expect(state.players.b.allies[0]!.health).toBe(9)
  })

  it('arcane ignores resistances', () => {
    const state = testMatch()

    place(state, 'b', 'test-drake', 0)
    hit(state, { player: 'b', slot: 0 }, 6, 'arcane')

    expect(state.players.b.allies[0]!.health).toBe(14)
  })

  it('ice doubles against a frozen target', () => {
    const state = testMatch()

    place(state, 'b', 'test-soldier', 0)

    const engine = new MatchEngine(state)

    engine.afflict({ player: 'b', slot: 0 }, 'freeze', 0)
    hit(state, { player: 'b', slot: 0 }, 4, 'ice')

    expect(state.players.b.allies[0]!.health).toBe(12)
  })

  it('lightning jumps with half of it to a neighbor', () => {
    const state = testMatch()

    place(state, 'b', 'test-soldier', 1)
    place(state, 'b', 'test-soldier', 2)
    hit(state, { player: 'b', slot: 1 }, 6, 'lightning')

    expect(state.players.b.allies[1]!.health).toBe(14)
    expect(state.players.b.allies[2]!.health).toBe(17)
  })

  it('shadow goes past shields and armor', () => {
    const state = testMatch()

    place(state, 'b', 'test-shield', 0)
    state.players.b.hero.armor = 10
    hit(state, { player: 'b', slot: 0 }, 4, 'shadow')
    hit(state, HERO_B, 6, 'shadow')

    expect(state.players.b.allies[0]!.health).toBe(6)
    expect(state.players.b.allies[0]!.shield).toBe(true)
    expect(state.players.b.hero.health).toBe(44)
    expect(state.players.b.hero.armor).toBe(10)
  })

  it('light heals the dealer and doubles against undead', () => {
    const state = testMatch()

    state.players.a.hero.health = 40
    place(state, 'b', 'test-undead', 0)
    hit(state, { player: 'b', slot: 0 }, 4, 'light')

    expect(state.players.b.allies[0]!.health).toBe(12)
    expect(state.players.a.hero.health).toBe(44)
  })

  it("time damage can't be healed back and drains a Chronos from a hero", () => {
    const state = testMatch()

    state.players.b.chronos = 2
    hit(state, HERO_B, 5, 'time')

    const engine = new MatchEngine(state)

    engine.heal(HERO_B, 10)

    expect(state.players.b.hero.health).toBe(45)
    expect(state.players.b.hero.maxHealth).toBe(45)
    expect(state.players.b.chronos).toBe(1)
  })

  it('acid poisons and breaks one more armor point', () => {
    const state = testMatch()

    state.players.b.hero.armor = 10
    hit(state, HERO_B, 4, 'acid')

    expect(state.players.b.hero.armor).toBe(5)
    expect(state.players.b.hero.poison).toBe(1)
  })

  it('earth stuns a weak ally and does nothing to a flying one', () => {
    const state = testMatch()

    place(state, 'b', 'test-guard', 0)
    place(state, 'b', 'test-bird', 1)

    const engine = hit(state, { player: 'b', slot: 0 }, 3, 'earth')

    hit(state, { player: 'b', slot: 1 }, 3, 'earth')

    expect(engine.isStunned(state.players.b.allies[0]!)).toBe(true)
    expect(state.players.b.allies[1]!.health).toBe(10)
  })

  it('sonic reveals, water weakens and wind doubles against flyers', () => {
    const state = testMatch()

    place(state, 'b', 'test-sneak', 0)
    place(state, 'b', 'test-bird', 2)
    hit(state, { player: 'b', slot: 0 }, 1, 'sonic')
    hit(state, { player: 'b', slot: 0 }, 1, 'water')
    hit(state, { player: 'b', slot: 2 }, 3, 'wind')

    expect(state.players.b.allies[0]!.keywords).not.toContain('stealth')
    expect(state.players.b.allies[0]!.attack).toBe(4)
    expect(state.players.b.allies[2]!.health).toBe(4)
  })

  it('an elemental ally attacks with its element', () => {
    const state = testMatch()
    const pyro = place(state, 'a', 'test-pyro', 0)
    const { state: next } = resolvePhase(state, {
      a: timeline({ kind: 'allyAttack', allyUid: pyro.uid, target: HERO_B }),
      b: timeline()
    })

    // 6 from the attack, then the burn ticks at the start of the next phase.
    expect(next.players.b.hero.burn).toBe(1)
  })
})
