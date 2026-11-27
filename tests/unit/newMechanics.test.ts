import '@/app/(protected)/(cards)/utils/catalog'
import { describe, expect, it } from 'vitest'
import { MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { cardCost } from '@/app/(protected)/(engine)/utils/boons'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { give, place, testMatch, timeline } from '@/tests/support/testCards'

/**
 * The engine rules the cards of the 2026-11-27 batch need: a temporary disarm, the source of a damage and
 * its killer, lost keywords, gear with an ability, the discard pile back to the deck and more.
 */
const HERO_A = { player: 'a', slot: 'hero' } as const
const HERO_B = { player: 'b', slot: 'hero' } as const

function run(state: MatchState, a: Timeline = emptyTimeline(), b: Timeline = emptyTimeline()) {
  return resolvePhase(state, { a, b })
}

function fails(events: MatchEvent[]): string[] {
  return events.flatMap((event) => (event.type === 'fail' ? [event.reason] : []))
}

function equip(state: MatchState, player: PlayerId, cardId: string) {
  const definition = getCard(cardId)
  const card = { uid: state.nextUid++, cardId }

  if (definition.type === 'weapon') {
    state.players[player].hero.weapon = { card, attack: definition.attack!, durability: definition.durability! }
  } else {
    state.players[player].hero.armor = { card, reduction: definition.armor!, durability: definition.durability! }
  }

  return card
}

describe('a temporary disarm', () => {
  it('Clockwork Deluge keeps every ally from attacking until the end of the next phase', () => {
    let state = testMatch()
    const mine = place(state, 'a', 'test-soldier', 0)
    const theirs = place(state, 'b', 'test-soldier', 0)
    const deluge = give(state, 'a', 'clockwork-deluge')

    state.players.a.chronos = 10
    state = run(
      state,
      timeline({ kind: 'play', cardUid: deluge.uid }, { kind: 'allyAttack', allyUid: mine.uid, target: HERO_B }),
      timeline({ kind: 'wait' }, { kind: 'allyAttack', allyUid: theirs.uid, target: HERO_A })
    ).state

    expect(state.players.a.hero.health).toBe(50)
    expect(state.players.b.hero.health).toBe(50)

    const second = run(state, timeline({ kind: 'allyAttack', allyUid: mine.uid, target: HERO_B }))

    expect(fails(second.events)).toEqual(['cantAttack'])

    const third = run(second.state, timeline({ kind: 'allyAttack', allyUid: mine.uid, target: HERO_B }))

    expect(third.state.players.b.hero.health).toBe(40)
  })
})

describe('the source of a damage', () => {
  it('Stonehide Wolf takes no damage from attacks, but does from effects', () => {
    const state = testMatch()
    const attacker = place(state, 'a', 'test-soldier', 0)
    const wolf = place(state, 'b', 'stonehide-wolf', 0)
    const next = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: attacker.uid, target: { player: 'b', slot: 0 } })
    ).state

    expect(next.players.b.allies[0]).toMatchObject({ uid: wolf.uid, health: 4 })

    const zap = give(next, 'a', 'test-zap')

    next.players.a.chronos = 10

    const after = run(next, timeline({ kind: 'play', cardUid: zap.uid, targets: [{ player: 'b', slot: 0 }] })).state

    expect(after.players.b.allies[0]).toBeNull()
  })

  it('Lava Jackal takes the ally that killed it along', () => {
    const state = testMatch()
    const attacker = place(state, 'a', 'test-soldier', 0)

    place(state, 'b', 'lava-jackal', 0).health = 5

    const next = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: attacker.uid, target: { player: 'b', slot: 0 } })
    ).state

    expect(next.players.b.allies[0]).toBeNull()
    expect(next.players.a.allies[0]).toBeNull()
  })

  it('Counterstrike Mesh destroys the ally that hits the hero; Night Prowler Suit steals a card', () => {
    const state = testMatch()
    const attacker = place(state, 'b', 'test-soldier', 0)

    equip(state, 'a', 'counterstrike-mesh')

    const next = run(
      state,
      emptyTimeline(),
      timeline({ kind: 'allyAttack', allyUid: attacker.uid, target: HERO_A })
    ).state

    expect(next.players.b.allies[0]).toBeNull()

    const thief = testMatch()

    thief.players.a.hand = []

    equip(thief, 'a', 'test-sword')
    equip(thief, 'a', 'night-prowler-suit')

    const rival = thief.players.b.hand.map((card) => card.uid)
    const robbed = run(thief, timeline({ kind: 'heroAttack', target: HERO_B })).state

    expect(robbed.players.a.hand.filter((card) => rival.includes(card.uid))).toHaveLength(1)
  })

  it('a thorns element: the fire thorns burn the attacker', () => {
    const state = testMatch()
    const attacker = place(state, 'a', 'test-soldier', 0)

    place(state, 'b', 'molten-slag-automaton', 0)

    const next = run(
      state,
      timeline({ kind: 'allyAttack', allyUid: attacker.uid, target: { player: 'b', slot: 0 } })
    ).state

    expect(next.players.a.allies[0]?.burn).toBeGreaterThan(0)
  })
})

describe('keywords, stealth and wards', () => {
  it('Coldgaze Serpent takes the guardian away for the phase', () => {
    const state = testMatch()
    const serpent = place(state, 'a', 'coldgaze-serpent', 0)
    const attacker = place(state, 'a', 'test-soldier', 1)

    place(state, 'b', 'test-guard', 0)
    state.players.a.energy = 10

    const next = run(
      state,
      timeline(
        { kind: 'allyAbility', allyUid: serpent.uid, targets: [{ player: 'b', slot: 0 }] },
        { kind: 'allyAttack', allyUid: attacker.uid, target: HERO_B }
      )
    ).state

    expect(next.players.b.hero.health).toBe(40)
  })

  it('Iris Shadehunter keeps her stealth after attacking', () => {
    const state = testMatch()
    const iris = place(state, 'a', 'iris-shadehunter', 0)
    const next = run(state, timeline({ kind: 'allyAttack', allyUid: iris.uid, target: HERO_B })).state

    expect(next.players.b.hero.health).toBe(44)
    expect(next.players.a.allies[0]?.keywords).toContain('stealth')
  })

  it("Hero's Laurel keeps the rival's attachments away", () => {
    const state = testMatch()
    const host = place(state, 'a', 'test-soldier', 0)

    host.attachments = [{ uid: state.nextUid++, cardId: 'heros-laurel', owner: 'a' }]

    const snare = give(state, 'b', 'bone-snare')

    state.players.b.chronos = 10

    const result = run(
      state,
      emptyTimeline(),
      timeline({ kind: 'play', cardUid: snare.uid, targets: [{ player: 'a', slot: 0 }] })
    )

    expect(fails(result.events)).toEqual(['invalidTarget'])
  })

  it('Grimoire of Curses takes 2 away from the attacks of the enemy allies', () => {
    const state = testMatch()
    const attacker = place(state, 'b', 'test-soldier', 0)

    state.players.a.artifacts.push({ uid: state.nextUid++, cardId: 'grimoire-of-curses' })

    const next = run(
      state,
      emptyTimeline(),
      timeline({ kind: 'allyAttack', allyUid: attacker.uid, target: HERO_A })
    ).state

    expect(next.players.a.hero.health).toBe(42)
  })
})

describe('more rules', () => {
  it('Silent Winter Scepter freezes every ally that enters, of either side', () => {
    const state = testMatch()

    equip(state, 'a', 'silent-winter-scepter')

    const filler = give(state, 'b', 'test-soldier')

    state.players.b.chronos = 10

    const next = run(state, emptyTimeline(), timeline({ kind: 'play', cardUid: filler.uid, slot: 0 })).state

    expect(next.players.b.allies[0]?.frozenUntilPhase).toBe(3)
  })

  it('War Fang Tiger destroys an ally with its ability and dies at the end of the phase', () => {
    const state = testMatch()
    const tiger = place(state, 'a', 'war-fang-tiger', 0)

    place(state, 'b', 'test-soldier', 0)
    state.players.a.energy = 10

    const next = run(
      state,
      timeline({ kind: 'allyAbility', allyUid: tiger.uid, targets: [{ player: 'b', slot: 0 }] })
    ).state

    expect(next.players.b.allies[0]).toBeNull()
    expect(next.players.a.allies[0]).toBeNull()
  })

  it("Gearwright Artisan makes the owner's pricier artifacts cheaper", () => {
    const state = testMatch()

    place(state, 'a', 'gearwright-artisan', 0)

    expect(cardCost(state, 'a', getCard('dormant-sentinel'))).toBe(2)
    expect(cardCost(state, 'a', getCard('recirculation-core'))).toBe(2)
    expect(cardCost(state, 'b', getCard('dormant-sentinel'))).toBe(4)
  })

  it('the ability of a weapon is used like an artifact ability, once per phase', () => {
    const state = testMatch()
    const staff = equip(state, 'a', 'wandering-sage-staff')

    state.players.a.hand = []

    state.players.a.energy = 10

    const result = run(
      state,
      timeline({ kind: 'artifactAbility', artifactUid: staff.uid }, { kind: 'artifactAbility', artifactUid: staff.uid })
    )

    expect(fails(result.events)).toEqual(['abilityUsed'])
    // One from the staff and one at the start of the next phase.
    expect(result.state.players.a.hand.length).toBe(2)
  })

  it('Tide of Souls puts every ally of the pile on top of the deck; Data Transfer draws from the rival', () => {
    const state = testMatch()

    state.players.a.hand = []

    state.players.a.discard.push({ uid: state.nextUid++, cardId: 'test-soldier', defeated: true })
    state.players.a.discard.push({ uid: state.nextUid++, cardId: 'test-zap' })
    state.players.a.chronos = 10

    const tide = give(state, 'a', 'tide-of-souls')
    const transfer = give(state, 'a', 'data-transfer')
    const rivalTop = state.players.b.deck[state.players.b.deck.length - 1]
    const next = run(
      state,
      timeline({ kind: 'play', cardUid: tide.uid }, { kind: 'play', cardUid: transfer.uid })
    ).state
    const side = next.players.a

    expect(side.discard.map((card) => card.cardId)).toEqual(['test-zap', 'tide-of-souls', 'data-transfer'])
    expect(side.hand.some((card) => card.uid === rivalTop.uid)).toBe(true)
    // The soldier was drawn at the start of the next phase.
    expect(side.hand.some((card) => card.cardId === 'test-soldier')).toBe(true)
  })

  it('Dormant Sentinel becomes an ally and comes back as the artifact when it dies', () => {
    const state = testMatch()
    const sentinel = { uid: state.nextUid++, cardId: 'dormant-sentinel' }

    state.players.a.artifacts.push(sentinel)
    state.players.a.energy = 10

    const awake = run(state, timeline({ kind: 'artifactAbility', artifactUid: sentinel.uid })).state
    const unit = awake.players.a.allies.find((ally) => ally?.cardId === 'dormant-sentinel-awakened')

    expect(awake.players.a.artifacts).toEqual([])
    expect(unit).toBeDefined()

    unit!.health = 1

    const zap = give(awake, 'b', 'test-zap')
    const slot = awake.players.a.allies.indexOf(unit!)

    awake.players.b.chronos = 10

    const back = run(
      awake,
      emptyTimeline(),
      timeline({ kind: 'play', cardUid: zap.uid, targets: [{ player: 'a', slot }] })
    ).state

    expect(back.players.a.allies.every((ally) => ally?.cardId !== 'dormant-sentinel-awakened')).toBe(true)
    expect(back.players.a.artifacts.map((card) => card.cardId)).toEqual(['dormant-sentinel'])
  })
})
