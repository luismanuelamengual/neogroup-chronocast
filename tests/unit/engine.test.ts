import { describe, expect, it } from 'vitest'
import { MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, PlannedAction, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { createMatch, mulligan } from '@/app/(protected)/(engine)/utils/createMatch'
import { MatchEngine } from '@/app/(protected)/(engine)/utils/engine'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { give, place, testDeck, testMatch, timeline } from '@/tests/support/testCards'

const HERO_A = { player: 'a', slot: 'hero' } as const
const HERO_B = { player: 'b', slot: 'hero' } as const

function run(state: MatchState, a: Timeline = emptyTimeline(), b: Timeline = emptyTimeline()) {
  return resolvePhase(state, { a, b })
}

function fails(events: MatchEvent[]) {
  return events.flatMap((event) => (event.type === 'fail' ? [`${event.player}:${event.step}:${event.reason}`] : []))
}

/** A match where both players have plenty of Chronos for this phase. */
function richMatch(seed = 1): MatchState {
  const state = testMatch(seed)

  state.players.a.chronos = 10
  state.players.b.chronos = 10

  return state
}

describe('createMatch', () => {
  it('sets up heroes, hands and decks, ready for phase 1', () => {
    const state = testMatch()

    expect(state.phase).toBe(1)
    expect(state.status).toBe('planning')

    for (const side of [state.players.a, state.players.b]) {
      expect(side.hero.health).toBe(50)
      expect(side.hero.weapon).toBeNull()
      expect(side.hero.armor).toBe(0)
      expect(side.hand).toHaveLength(7)
      expect(side.deck).toHaveLength(32)
      expect(side.allies.every((ally) => ally === null)).toBe(true)
      expect(side.chronosCapacity).toBe(0)
    }
  })

  it('applies the adverse setups of the campaign', () => {
    const { state } = createMatch({
      seed: 3,
      decks: { a: testDeck(), b: testDeck() },
      setup: {
        b: { allies: ['test-soldier', 'test-guard'], chronosCapacity: 3, extraHealth: 20, weapon: 'test-sword' }
      }
    })

    expect(state.players.b.allies[0]?.cardId).toBe('test-soldier')
    expect(state.players.b.allies[1]?.cardId).toBe('test-guard')
    expect(state.players.b.chronos).toBe(3)
    expect(state.players.b.hero.health).toBe(70)
    expect(state.players.b.hero.weapon?.attack).toBe(10)
  })

  it('is deterministic: the same seed gives the same match', () => {
    const play = (seed: number) => {
      let state = richMatch(seed)

      place(state, 'a', 'test-soldier', 0)
      place(state, 'b', 'test-soldier', 0)

      for (let i = 0; i < 4 && state.status === 'planning'; i++) {
        const [a] = state.players.a.allies
        const [b] = state.players.b.allies

        state = run(
          state,
          timeline(a ? { kind: 'allyAttack', allyUid: a.uid, target: HERO_B } : { kind: 'wait' }),
          timeline(b ? { kind: 'allyAttack', allyUid: b.uid, target: HERO_A } : { kind: 'wait' })
        ).state
      }

      return state
    }

    expect(play(7)).toEqual(play(7))
    expect(testMatch(7).players.a.hand).not.toEqual(testMatch(8).players.a.hand)
  })

  it('lets each player mulligan once, before the first phase', () => {
    const state = testMatch()
    const uids = state.players.a.hand.slice(0, 3).map((card) => card.uid)
    const next = mulligan(state, 'a', uids)

    expect(next.players.a.hand).toHaveLength(7)
    expect(next.players.a.deck).toHaveLength(32)
    expect(next.players.a.mulliganDone).toBe(true)
    expect(mulligan(next, 'a', [next.players.a.hand[0].uid])).toBe(next)
  })
})

describe('Chronos', () => {
  it('a sacrifice raises the capacity for good, once per phase', () => {
    const state = testMatch()
    const [first, second] = state.players.a.hand
    const { state: next, events } = run(
      state,
      timeline({ kind: 'sacrifice', cardUid: first.uid }, { kind: 'sacrifice', cardUid: second.uid })
    )

    expect(fails(events)).toEqual(['a:1:sacrificeLimit'])
    expect(next.players.a.chronosCapacity).toBe(1)
    expect(next.players.a.chronos).toBe(1) // refilled at the start of phase 2
    expect(next.players.a.discard.map((card) => card.uid)).toContain(first.uid)
    expect(next.players.a.discard.map((card) => card.uid)).not.toContain(second.uid)
  })

  it('a card that costs more than the Chronos left fails', () => {
    const state = testMatch()
    const card = give(state, 'a', 'test-soldier')
    const { events } = run(state, timeline({ kind: 'play', cardUid: card.uid, slot: 0 }))

    expect(fails(events)).toEqual(['a:0:notEnoughChronos'])
  })

  it('the Chronos gained by a sacrifice can be spent in the same phase', () => {
    const state = testMatch()
    const fodder = state.players.a.hand[0]
    const card = give(state, 'a', 'test-soldier')
    const { state: next, events } = run(
      state,
      timeline({ kind: 'sacrifice', cardUid: fodder.uid }, { kind: 'play', cardUid: card.uid, slot: 2 })
    )

    expect(fails(events)).toEqual([])
    expect(next.players.a.allies[2]?.cardId).toBe('test-soldier')
  })
})

describe('allies', () => {
  it('an ally summoned this phase is not ready to attack', () => {
    const state = richMatch()
    const card = give(state, 'a', 'test-soldier')
    const { events } = run(
      state,
      timeline({ kind: 'play', cardUid: card.uid, slot: 0 }, { kind: 'allyAttack', allyUid: card.uid, target: HERO_B })
    )

    expect(fails(events)).toEqual(['a:1:notReady'])
  })

  it('charge attacks in a later step of the phase it enters, not in the same one', () => {
    const state = richMatch()
    const card = give(state, 'a', 'test-charger')
    const { state: next, events } = run(
      state,
      timeline({ kind: 'play', cardUid: card.uid, slot: 0 }, { kind: 'allyAttack', allyUid: card.uid, target: HERO_B })
    )

    expect(fails(events)).toEqual([])
    expect(next.players.b.hero.health).toBe(42)
  })

  it('a summon goes to the nearest free slot', () => {
    const state = richMatch()

    place(state, 'a', 'test-filler', 2)

    const card = give(state, 'a', 'test-soldier')
    const { state: next } = run(state, timeline({ kind: 'play', cardUid: card.uid, slot: 2 }))

    expect(next.players.a.allies[1]?.cardId).toBe('test-soldier')
  })

  it('an attack hits the hero', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const { state: next } = run(state, timeline({ kind: 'allyAttack', allyUid: soldier.uid, target: HERO_B }))

    expect(next.players.b.hero.health).toBe(40)
  })

  it('an ally attacks once per phase', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const attack = { kind: 'allyAttack', allyUid: soldier.uid, target: HERO_B } as const
    const { events } = run(state, timeline(attack, attack))

    expect(fails(events)).toEqual(['a:1:alreadyAttacked'])
  })

  it('moving away from an attack makes it miss', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const target = place(state, 'b', 'test-filler', 2)
    const { state: next, events } = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: soldier.uid, target: { player: 'b', slot: 2 } }),
      timeline({ kind: 'move', allyUid: target.uid, toSlot: 4 })
    )

    expect(events.some((event) => event.type === 'miss')).toBe(true)
    expect(next.players.b.allies[4]?.health).toBe(1)
  })

  it('normal moves go to any empty slot or swap with a neighbor; agile swaps with anyone', () => {
    const state = richMatch()
    const left = place(state, 'a', 'test-filler', 0)
    const middle = place(state, 'a', 'test-filler', 1)
    const agile = place(state, 'a', 'test-agile', 4)
    const { state: next, events } = run(
      state,
      timeline(
        { kind: 'move', allyUid: left.uid, toSlot: 3 }, // empty: fine
        { kind: 'move', allyUid: middle.uid, toSlot: 3 }, // occupied and far: fails
        { kind: 'move', allyUid: middle.uid, toSlot: 2 }, // empty: fine
        { kind: 'move', allyUid: middle.uid, toSlot: 3 }, // neighbor swap: fine
        { kind: 'move', allyUid: agile.uid, toSlot: 2 } // agile swap from far away: fine
      )
    )

    expect(fails(events)).toEqual(['a:1:invalidTarget'])
    expect(next.players.a.allies.map((ally) => ally?.uid ?? null)).toEqual([
      null,
      null,
      agile.uid,
      middle.uid,
      left.uid
    ])
  })
})

describe('speed and simultaneity', () => {
  it('actions of the same speed land together: a dying ally still strikes', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const archer = place(state, 'b', 'test-archer', 0)
    const { state: next } = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: soldier.uid, target: { player: 'b', slot: 0 } }),
      timeline({ kind: 'allyAttack', allyUid: archer.uid, target: HERO_A })
    )

    expect(next.players.b.allies[0]).toBeNull()
    expect(next.players.a.hero.health).toBe(45)
  })

  it('a faster action resolves first: the slower ally dies before acting', () => {
    const state = richMatch()
    const quick = place(state, 'a', 'test-quick', 0)
    const archer = place(state, 'b', 'test-archer', 0)
    const { state: next, events } = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: quick.uid, target: { player: 'b', slot: 0 } }),
      timeline({ kind: 'allyAttack', allyUid: archer.uid, target: HERO_A })
    )

    expect(fails(events)).toEqual(['b:0:noUnit'])
    expect(next.players.a.hero.health).toBe(50)
    expect(next.players.a.allies[0]?.health).toBe(5) // the archer's counterattack
  })

  it('a move is instant and beats any attack of the same step', () => {
    const state = richMatch()
    const quick = place(state, 'a', 'test-quick', 0)
    const target = place(state, 'b', 'test-filler', 0)
    const { events } = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: quick.uid, target: { player: 'b', slot: 0 } }),
      timeline({ kind: 'move', allyUid: target.uid, toSlot: 1 })
    )
    const kinds = events.filter((event) => event.type === 'move' || event.type === 'miss').map((event) => event.type)

    expect(kinds).toEqual(['move', 'miss'])
  })
})

describe('end of the match', () => {
  it('the hero that falls loses', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)

    state.players.b.hero.health = 5

    const { state: next } = run(state, timeline({ kind: 'allyAttack', allyUid: soldier.uid, target: HERO_B }))

    expect(next.status).toBe('finished')
    expect(next.result).toEqual({ winner: 'a', reason: 'hero' })
  })

  it('both heroes falling in the same step is a draw', () => {
    const state = richMatch()
    const a = place(state, 'a', 'test-soldier', 0)
    const b = place(state, 'b', 'test-soldier', 0)

    state.players.a.hero.health = 5
    state.players.b.hero.health = 5

    const { state: next } = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: a.uid, target: HERO_B }),
      timeline({ kind: 'allyAttack', allyUid: b.uid, target: HERO_A })
    )

    expect(next.result).toEqual({ winner: null, reason: 'hero' })
  })

  it('after the last step nothing else resolves', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const card = give(state, 'b', 'test-soldier')

    state.players.b.hero.health = 5

    const { events } = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: soldier.uid, target: HERO_B }),
      timeline({ kind: 'wait' }, { kind: 'play', cardUid: card.uid, slot: 0 })
    )

    expect(events.some((event) => event.type === 'step' && event.step === 1)).toBe(false)
  })

  it('at the phase limit the healthier hero wins', () => {
    const state = richMatch()

    state.phase = 30
    state.players.a.hero.health = 40
    state.players.b.hero.health = 60

    const { state: next } = run(state)

    expect(next.result).toEqual({ winner: 'b', reason: 'phaseLimit' })
  })
})

describe('keywords', () => {
  it('guardian takes the attacks aimed at its hero', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)

    place(state, 'b', 'test-guard', 3)

    const { state: next } = run(state, timeline({ kind: 'allyAttack', allyUid: soldier.uid, target: HERO_B }))

    expect(next.players.b.hero.health).toBe(50)
    expect(next.players.b.allies[3]?.health).toBe(20)
    expect(next.players.a.allies[0]?.health).toBe(18) // counterattack
  })

  it('melee takes a counterattack, ranged does not', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const archer = place(state, 'a', 'test-archer', 1)

    place(state, 'b', 'test-soldier', 0)

    const { state: next } = run(
      state,
      timeline(
        { kind: 'allyAttack', allyUid: soldier.uid, target: { player: 'b', slot: 0 } },
        { kind: 'allyAttack', allyUid: archer.uid, target: { player: 'b', slot: 0 } }
      )
    )

    expect(next.players.a.allies[0]?.health).toBe(10)
    expect(next.players.a.allies[1]?.health).toBe(10)
    expect(next.players.b.allies[0]?.health).toBe(5)
  })

  it('thorns hurt even ranged attackers', () => {
    const state = richMatch()
    const archer = place(state, 'a', 'test-archer', 0)

    place(state, 'b', 'test-thorns', 0)

    const { state: next } = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: archer.uid, target: { player: 'b', slot: 0 } })
    )

    expect(next.players.a.allies[0]?.health).toBe(5)
  })

  it('shield blocks the first hit', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const target = { player: 'b', slot: 0 } as const

    place(state, 'b', 'test-shield', 0)

    let next = run(state, timeline({ kind: 'allyAttack', allyUid: soldier.uid, target })).state

    expect(next.players.b.allies[0]?.health).toBe(10)
    expect(next.players.b.allies[0]?.shield).toBe(false)

    next = run(next, timeline({ kind: 'allyAttack', allyUid: soldier.uid, target })).state

    expect(next.players.b.allies[0]).toBeNull()
  })

  it('flying can only be hit by flying or ranged attackers', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const archer = place(state, 'a', 'test-archer', 1)
    const target = { player: 'b', slot: 0 } as const

    place(state, 'b', 'test-bird', 0)

    const { state: next, events } = run(
      state,
      timeline(
        { kind: 'allyAttack', allyUid: soldier.uid, target },
        { kind: 'allyAttack', allyUid: archer.uid, target }
      )
    )

    expect(events.filter((event) => event.type === 'miss')).toHaveLength(1)
    expect(next.players.b.allies[0]?.health).toBe(5)
  })

  it('stealth cannot be targeted until it attacks', () => {
    const state = richMatch()
    const sneak = place(state, 'b', 'test-sneak', 0)
    const zap = give(state, 'a', 'test-zap')
    const zapAgain = give(state, 'a', 'test-zap')
    const target = { player: 'b', slot: 0 } as const
    const { state: next, events } = run(
      state,
      timeline(
        { kind: 'play', cardUid: zap.uid, targets: [target] },
        { kind: 'wait' },
        { kind: 'play', cardUid: zapAgain.uid, targets: [target] }
      ),
      timeline({ kind: 'wait' }, { kind: 'allyAttack', allyUid: sneak.uid, target: HERO_A })
    )

    expect(fails(events)).toEqual(['a:0:invalidTarget'])
    expect(next.players.b.allies[0]?.health).toBe(5)
    expect(next.players.a.hero.health).toBe(45)
  })

  it('poison kills any ally it damages', () => {
    const state = richMatch()
    const poison = place(state, 'a', 'test-poison', 0)

    place(state, 'b', 'test-soldier', 0)

    const { state: next } = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: poison.uid, target: { player: 'b', slot: 0 } })
    )

    expect(next.players.b.allies[0]).toBeNull()
  })

  it('lifesteal heals the hero by the damage dealt', () => {
    const state = richMatch()
    const vampire = place(state, 'a', 'test-vampire', 0)

    state.players.a.hero.health = 30

    const { state: next } = run(state, timeline({ kind: 'allyAttack', allyUid: vampire.uid, target: HERO_B }))

    expect(next.players.a.hero.health).toBe(36)
  })

  it('frenzy attacks twice per phase', () => {
    const state = richMatch()
    const frenzy = place(state, 'a', 'test-frenzy', 0)
    const attack = { kind: 'allyAttack', allyUid: frenzy.uid, target: HERO_B } as const
    const { state: next, events } = run(state, timeline(attack, attack, attack))

    expect(fails(events)).toEqual(['a:2:alreadyAttacked'])
    expect(next.players.b.hero.health).toBe(40)
  })

  it('cleave also hits the neighbors of the target', () => {
    const state = richMatch()
    const cleaver = place(state, 'a', 'test-cleaver', 0)

    place(state, 'b', 'test-filler', 0)
    place(state, 'b', 'test-soldier', 1)
    place(state, 'b', 'test-filler', 2)
    place(state, 'b', 'test-filler', 3)

    const { state: next } = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: cleaver.uid, target: { player: 'b', slot: 1 } })
    )

    expect(next.players.b.allies.map((ally) => ally?.cardId ?? null)).toEqual([
      null,
      'test-soldier',
      null,
      'test-filler',
      null
    ])
  })

  it('echo returns to the hand the first time it dies', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const target = { player: 'b', slot: 0 } as const

    place(state, 'b', 'test-echo', 0)
    state.players.b.hand = [] // a full hand would burn it

    let next = run(state, timeline({ kind: 'allyAttack', allyUid: soldier.uid, target })).state
    const echo = next.players.b.hand.find((card) => card.cardId === 'test-echo')

    expect(echo?.echoUsed).toBe(true)

    // Back on the board, it is discarded the second time.
    next.players.b.chronos = 5
    next = run(next, emptyTimeline(), timeline({ kind: 'play', cardUid: echo!.uid, slot: 0 })).state
    next = run(next, timeline({ kind: 'allyAttack', allyUid: soldier.uid, target })).state

    expect(next.players.b.hand.some((card) => card.cardId === 'test-echo')).toBe(false)
    expect(next.players.b.discard.some((card) => card.cardId === 'test-echo')).toBe(true)
  })

  it('resurge can be played from the discard pile', () => {
    const state = richMatch()

    state.players.a.discard.push({ uid: state.nextUid++, cardId: 'test-ghost' })

    const ghost = state.players.a.discard.at(-1)!
    const { state: next, events } = run(state, timeline({ kind: 'play', cardUid: ghost.uid, slot: 0 }))

    expect(fails(events)).toEqual([])
    expect(next.players.a.allies[0]?.cardId).toBe('test-ghost')
  })
})

describe('ally abilities', () => {
  const bolt = (allyUid: number): PlannedAction => ({ kind: 'allyAbility', allyUid, targets: [HERO_B] })

  it('an ally uses its ability for its Chronos, once per phase', () => {
    const state = richMatch()
    const caster = place(state, 'a', 'test-caster', 0)
    const { state: next, events } = run(state, timeline(bolt(caster.uid), bolt(caster.uid)))

    expect(fails(events)).toEqual(['a:1:abilityUsed'])
    expect(next.players.b.hero.health).toBe(43)
  })

  it('an ally that used its ability does not attack that phase, and the other way around', () => {
    const state = richMatch()
    const caster = place(state, 'a', 'test-caster', 0)
    const attack = { kind: 'allyAttack', allyUid: caster.uid, target: HERO_B } as const

    expect(fails(run(state, timeline(bolt(caster.uid), attack)).events)).toEqual(['a:1:exhausted'])
    expect(fails(run(state, timeline(attack, bolt(caster.uid))).events)).toEqual(['a:1:exhausted'])
  })

  it('a new, stunned or poor ally cannot use it, nor one without an ability', () => {
    const fresh = richMatch()
    const newcomer = place(fresh, 'a', 'test-caster', 0)

    newcomer.enteredPhase = fresh.phase
    expect(fails(run(fresh, timeline(bolt(newcomer.uid))).events)).toEqual(['a:0:notReady'])

    const dazed = richMatch()
    const stunned = place(dazed, 'a', 'test-caster', 0)

    stunned.stunnedUntilPhase = dazed.phase
    expect(fails(run(dazed, timeline(bolt(stunned.uid))).events)).toEqual(['a:0:stunned'])

    const poor = richMatch()
    const caster = place(poor, 'a', 'test-caster', 0)

    poor.players.a.chronos = 1
    expect(fails(run(poor, timeline(bolt(caster.uid))).events)).toEqual(['a:0:notEnoughChronos'])

    const plain = richMatch()
    const soldier = place(plain, 'a', 'test-soldier', 0)

    expect(fails(run(plain, timeline(bolt(soldier.uid))).events)).toEqual(['a:0:noAbility'])
  })
})

describe('the hero', () => {
  it('a weapon attacks once per phase and breaks when its durability runs out', () => {
    const state = richMatch()
    const sword = give(state, 'a', 'test-sword')
    const attack = { kind: 'heroAttack', target: HERO_B } as const
    let result = run(state, timeline({ kind: 'play', cardUid: sword.uid }, attack, attack))

    expect(fails(result.events)).toEqual(['a:2:alreadyAttacked'])
    expect(result.state.players.a.hero.weapon?.durability).toBe(1)

    result = run(result.state, timeline(attack))

    expect(result.state.players.b.hero.health).toBe(30)
    expect(result.state.players.a.hero.weapon).toBeNull()
    expect(result.state.players.a.discard.some((card) => card.cardId === 'test-sword')).toBe(true)
  })

  it('without a weapon the hero cannot attack', () => {
    const { events } = run(richMatch(), timeline({ kind: 'heroAttack', target: HERO_B }))

    expect(fails(events)).toEqual(['a:0:noWeapon'])
  })

  it('armor absorbs damage before health and is discarded when used up', () => {
    const state = richMatch()
    const plate = give(state, 'a', 'test-plate')
    const soldier = place(state, 'b', 'test-cleaver', 0) // attack 10
    const strike = { kind: 'allyAttack', allyUid: soldier.uid, target: HERO_A } as const
    let next = run(state, timeline({ kind: 'play', cardUid: plate.uid }), timeline({ kind: 'wait' }, strike)).state

    expect(next.players.a.hero.armor).toBe(10)
    expect(next.players.a.hero.health).toBe(50)

    next.players.b.allies[0]!.attack = 15
    next = run(next, emptyTimeline(), timeline(strike)).state

    expect(next.players.a.hero.armor).toBe(0)
    expect(next.players.a.hero.armorCard).toBeNull()
    expect(next.players.a.hero.health).toBe(45)
  })

  it('abilities check their targets when they resolve', () => {
    const state = richMatch()
    const zap = give(state, 'a', 'test-zap')
    const wrong = give(state, 'a', 'test-zap')
    const { state: next, events } = run(
      state,
      timeline(
        { kind: 'play', cardUid: wrong.uid, targets: [HERO_A] },
        { kind: 'play', cardUid: zap.uid, targets: [HERO_B] }
      )
    )

    expect(fails(events)).toEqual(['a:0:invalidTarget'])
    expect(next.players.b.hero.health).toBe(45)
    expect(next.players.a.hand.some((card) => card.uid === wrong.uid)).toBe(true)
  })
})

describe('traps', () => {
  it('a trap can cancel an attack, and is discarded', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const snare = give(state, 'b', 'test-snare')
    const { state: next, events } = run(
      state,
      timeline({ kind: 'wait' }, { kind: 'allyAttack', allyUid: soldier.uid, target: HERO_B }),
      timeline({ kind: 'play', cardUid: snare.uid })
    )

    expect(fails(events)).toEqual(['a:1:cancelled'])
    expect(next.players.b.hero.health).toBe(50)
    expect(next.players.b.traps).toHaveLength(0)
    expect(next.players.b.discard.some((card) => card.uid === snare.uid)).toBe(true)
  })

  it('traps and artifacts share the 5 support slots', () => {
    const state = richMatch()
    const idol = give(state, 'a', 'test-idol')
    const snares = Array.from({ length: 5 }, () => give(state, 'a', 'test-snare'))
    const { state: next, events } = run(
      state,
      timeline(
        { kind: 'play', cardUid: idol.uid },
        ...snares.map((card) => ({ kind: 'play', cardUid: card.uid }) as const)
      )
    )

    expect(fails(events)).toEqual(['a:5:supportFull'])
    expect(next.players.a.traps).toHaveLength(4)
    expect(next.players.a.artifacts).toHaveLength(1)
  })
})

describe('cards and fatigue', () => {
  it('draws 1 per phase and burns what does not fit in a full hand', () => {
    const { state, events } = run(testMatch())

    expect(state.players.a.hand).toHaveLength(7)
    expect(state.players.a.deck).toHaveLength(31)
    expect(events.filter((event) => event.type === 'burn' && event.player === 'a')).toHaveLength(1)
  })

  it('drawing from an empty deck causes growing fatigue damage', () => {
    const state = testMatch()

    state.players.a.deck = []

    const { state: next } = run(state)

    expect(next.players.a.fatigue).toBe(1)
    expect(next.players.a.hero.health).toBe(50 - 10)
  })
})

describe('attachments and artifacts', () => {
  it('an attachment goes on an ally: its stats and keywords, and it is discarded when the ally dies', () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const blade = give(state, 'a', 'test-blade')
    const { state: next, events } = run(
      state,
      timeline({ kind: 'play', cardUid: blade.uid, targets: [{ player: 'a', slot: 0 }] })
    )
    const unit = next.players.a.allies[0]!

    expect(fails(events)).toEqual([])
    expect(unit.attack).toBe(15)
    expect(unit.keywords).toContain('guardian')
    expect(unit.attachments?.map((card) => card.uid)).toEqual([blade.uid])

    unit.health = 1
    next.players.b.chronos = 10
    const zap = give(next, 'b', 'test-zap')
    const after = run(
      next,
      emptyTimeline(),
      timeline({ kind: 'play', cardUid: zap.uid, targets: [{ player: 'a', slot: 0 }] })
    )

    expect(after.state.players.a.allies[0]).toBeNull()
    expect(after.state.players.a.discard.map((card) => card.uid)).toEqual(
      expect.arrayContaining([blade.uid, soldier.uid])
    )
  })

  it('an attachment can reduce the damage its ally takes', () => {
    const state = richMatch()

    place(state, 'a', 'test-soldier', 0)
    const ward = give(state, 'a', 'test-ward')
    const zap = give(state, 'b', 'test-zap')
    const { state: next } = run(
      state,
      timeline({ kind: 'play', cardUid: ward.uid, targets: [{ player: 'a', slot: 0 }] }),
      timeline({ kind: 'wait' }, { kind: 'play', cardUid: zap.uid, targets: [{ player: 'a', slot: 0 }] })
    )

    expect(next.players.a.allies[0]?.health).toBe(18)
  })

  it('a curse on a rival ally goes back to its owner discard pile', () => {
    const state = richMatch()

    place(state, 'b', 'test-soldier', 2)
    const curse = give(state, 'a', 'test-curse')
    const { state: next } = run(
      state,
      timeline({ kind: 'play', cardUid: curse.uid, targets: [{ player: 'b', slot: 2 }] })
    )
    const unit = next.players.b.allies[2]!

    expect(unit.attack).toBe(6)
    unit.health = 1
    next.players.a.chronos = 10
    const zap = give(next, 'a', 'test-zap')
    const after = run(next, timeline({ kind: 'play', cardUid: zap.uid, targets: [{ player: 'b', slot: 2 }] }))

    expect(after.state.players.a.discard.some((card) => card.uid === curse.uid)).toBe(true)
    expect(after.state.players.b.discard.some((card) => card.uid === curse.uid)).toBe(false)
  })

  it('an artifact stays in support and is discarded when its charges run out', () => {
    const state = richMatch()

    state.players.a.hero.health = 30
    const idol = give(state, 'a', 'test-idol')
    let current = run(state, timeline({ kind: 'play', cardUid: idol.uid })).state

    expect(current.players.a.artifacts.map((card) => card.uid)).toEqual([idol.uid])
    current = run(current).state
    expect(current.players.a.hero.health).toBe(40)
    expect(current.players.a.artifacts).toHaveLength(0)
    expect(current.players.a.discard.some((card) => card.uid === idol.uid)).toBe(true)
  })
})

describe('energy', () => {
  it('grows by 1 each phase up to the maximum, and is kept from phase to phase', () => {
    const state = testMatch()

    expect(state.players.a.energy).toBe(1)

    const { state: next } = run(state)

    expect(next.players.a.energy).toBe(2)

    next.players.a.energy = 10

    expect(run(next).state.players.a.energy).toBe(10)
  })

  it("pays the hero's ability (not the Chronos), and fails without enough", () => {
    const state = richMatch()

    state.players.a.hero.cardId = 'test-shaman'
    state.players.a.energy = 2

    const { state: next, events } = run(
      state,
      timeline({ kind: 'heroAbility', targets: [{ player: 'b', slot: 'hero' }] })
    )

    expect(fails(events)).toEqual([])
    expect(next.players.b.hero.health).toBe(45)
    // 2 - 2 spent + 1 of the new phase; the Chronos were not touched.
    expect(next.players.a.energy).toBe(1)

    const poor = richMatch()

    poor.players.a.hero.cardId = 'test-shaman'
    poor.players.a.energy = 1

    expect(
      fails(run(poor, timeline({ kind: 'heroAbility', targets: [{ player: 'b', slot: 'hero' }] })).events)
    ).toEqual(['a:0:notEnoughEnergy'])
  })

  it('pays the ability of an ally that uses energy', () => {
    const state = richMatch()
    const caster = place(state, 'a', 'test-channeler', 0)

    state.players.a.energy = 3
    state.players.a.chronos = 0

    const { state: next, events } = run(
      state,
      timeline({ kind: 'allyAbility', allyUid: caster.uid, targets: [{ player: 'b', slot: 'hero' }] })
    )

    expect(fails(events)).toEqual([])
    expect(next.players.b.hero.health).toBe(46)
    expect(next.players.a.energy).toBe(2)
  })
})

describe('status effects', () => {
  it('poison hurts at the start of each phase and fades by 1, past shields and armor', () => {
    const state = testMatch()
    const shielded = place(state, 'b', 'test-shield', 0)
    const engine = new MatchEngine(state)

    engine.afflict({ player: 'b', slot: 0 }, 'poison', 3)
    engine.afflict({ player: 'b', slot: 'hero' }, 'poison', 2)
    state.players.b.hero.armor = 10

    const first = run(state).state
    const unit = first.players.b.allies[0]!

    expect(unit.uid).toBe(shielded.uid)
    expect(unit.health).toBe(7)
    expect(unit.shield).toBe(true)
    expect(unit.poison).toBe(2)
    expect(first.players.b.hero.health).toBe(48)
    expect(first.players.b.hero.armor).toBe(10)

    expect(run(first).state.players.b.allies[0]!.health).toBe(5)
  })

  it('a burn hurts the same each phase until it runs out', () => {
    const state = testMatch()

    place(state, 'b', 'test-soldier', 0)
    new MatchEngine(state).afflict({ player: 'b', slot: 0 }, 'burn', 4, 2)

    const first = run(state).state
    const second = run(first).state
    const third = run(second).state

    expect(first.players.b.allies[0]!.health).toBe(16)
    expect(second.players.b.allies[0]!.health).toBe(12)
    expect(third.players.b.allies[0]!.health).toBe(12)
    expect(third.players.b.allies[0]!.burn).toBe(0)
  })

  it("a frozen ally can't attack or use its ability; a frozen hero can't use its ability", () => {
    const state = richMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)
    const caster = place(state, 'a', 'test-caster', 1)
    const engine = new MatchEngine(state)

    state.players.a.hero.cardId = 'test-shaman'
    state.players.a.energy = 5
    engine.afflict({ player: 'a', slot: 0 }, 'freeze', 0)
    engine.afflict({ player: 'a', slot: 1 }, 'freeze', 0)
    engine.afflict({ player: 'a', slot: 'hero' }, 'freeze', 0)

    const { events, state: next } = run(
      state,
      timeline(
        { kind: 'allyAttack', allyUid: soldier.uid, target: { player: 'b', slot: 'hero' } },
        { kind: 'allyAbility', allyUid: caster.uid, targets: [{ player: 'b', slot: 'hero' }] },
        { kind: 'heroAbility', targets: [{ player: 'b', slot: 'hero' }] }
      )
    )

    expect(fails(events)).toEqual(['a:0:frozen', 'a:1:frozen', 'a:2:frozen'])
    // Frozen for the rest of the phase only: it thaws in the next one.
    expect(new MatchEngine(next).isFrozen(next.players.a.allies[0]!)).toBe(false)
  })

  it('cleanse removes every status effect', () => {
    const state = testMatch()

    place(state, 'b', 'test-soldier', 0)

    const engine = new MatchEngine(state)

    engine.afflict({ player: 'b', slot: 0 }, 'poison', 3)
    engine.afflict({ player: 'b', slot: 0 }, 'burn', 3)
    engine.cleanse({ player: 'b', slot: 0 })

    expect(run(state).state.players.b.allies[0]!.health).toBe(20)
  })
})

describe('curses on enemy allies', () => {
  it('an attachment can keep the ally from attacking, or from using its ability', () => {
    const state = richMatch()
    const soldier = place(state, 'b', 'test-soldier', 0)
    const caster = place(state, 'b', 'test-caster', 1)
    const shackle = give(state, 'a', 'test-shackle')
    const hush = give(state, 'a', 'test-hush')
    const { state: cursed, events } = run(
      state,
      timeline(
        { kind: 'play', cardUid: shackle.uid, targets: [{ player: 'b', slot: 0 }] },
        { kind: 'play', cardUid: hush.uid, targets: [{ player: 'b', slot: 1 }] }
      )
    )

    expect(fails(events)).toEqual([])

    cursed.players.b.chronos = 10

    const { events: next } = run(
      cursed,
      emptyTimeline(),
      timeline(
        { kind: 'allyAttack', allyUid: soldier.uid, target: { player: 'a', slot: 'hero' } },
        { kind: 'allyAbility', allyUid: caster.uid, targets: [{ player: 'a', slot: 'hero' }] }
      )
    )

    expect(fails(next)).toEqual(['b:0:cantAttack', 'b:1:silenced'])
  })

  it('an attachment can hurt the ally each time it attacks', () => {
    const state = richMatch()
    const soldier = place(state, 'b', 'test-soldier', 0)
    const barbs = give(state, 'a', 'test-barbs')
    const { state: cursed } = run(
      state,
      timeline({ kind: 'play', cardUid: barbs.uid, targets: [{ player: 'b', slot: 0 }] })
    )
    const { state: next } = run(
      cursed,
      emptyTimeline(),
      timeline({ kind: 'allyAttack', allyUid: soldier.uid, target: { player: 'a', slot: 'hero' } })
    )

    expect(next.players.b.allies[0]!.health).toBe(17)
    expect(next.players.a.hero.health).toBe(40)
  })
})

describe("breaking the rival's gear", () => {
  it('wears and destroys weapons and armor', () => {
    const state = testMatch()
    const engine = new MatchEngine(state)
    const hero = state.players.b.hero

    hero.weapon = { card: { uid: 900, cardId: 'test-sword' }, attack: 10, durability: 3 }
    hero.armor = 20
    hero.armorCard = { uid: 901, cardId: 'test-plate' }

    engine.wearWeapon('b', 2)
    engine.wearArmor('b', 15)

    expect(hero.weapon?.durability).toBe(1)
    expect(hero.armor).toBe(5)

    engine.wearWeapon('b', 1)
    engine.wearArmor('b', 9)

    expect(hero.weapon).toBeNull()
    expect(hero.armor).toBe(0)
    expect(hero.armorCard).toBeNull()
    expect(state.players.b.discard.map((card) => card.cardId)).toEqual(['test-sword', 'test-plate'])
  })

  it('destroys the most expensive artifact and a random trap', () => {
    const state = testMatch()
    const engine = new MatchEngine(state)
    const side = state.players.b

    side.artifacts = [
      { uid: 900, cardId: 'test-idol' },
      { uid: 901, cardId: 'test-blade' }
    ]
    side.traps = [{ uid: 902, cardId: 'test-snare' }]

    expect(engine.destroyTrap('b')).toBe(true)
    expect(engine.destroyTrap('b')).toBe(false)
    expect(engine.destroyArtifact('b')).toBe(true)
    expect(side.artifacts).toHaveLength(1)
    expect(side.discard.map((card) => card.cardId)).toEqual(['test-snare', expect.any(String)])
  })
})
