import { describe, expect, it } from 'vitest'
import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import {
  buffSelf,
  damage,
  damageEnemyHero,
  disableSupportAt,
  hasPanoply,
  heal,
  isCursed,
  isEnhanced,
  isPrey,
  markPrey,
  recharge
} from '@/app/(protected)/(engine)/effects'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'
import { CardInstance, MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { MatchEngine } from '@/app/(protected)/(engine)/utils/engine'
import { registerCards } from '@/app/(protected)/(engine)/utils/registry'
import { actionSpeed, resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { give, place, testMatch, timeline } from '@/tests/support/testCards'

/**
 * The mechanics that give each faction its personality (docs/FACTIONS.md),
 * tried one at a time with small cards of their own.
 */
const base = { faction: 'neutral', restriction: {}, rarity: 'common', text: '', art: { subject: 'test' } } as const
const CARDS: CardDefinition[] = [
  defineCard({ ...base, id: 'f-bow', type: 'weapon', subtype: 'bow', name: 'Bow', cost: 0, attack: 4, durability: 3 }),
  defineCard({
    ...base,
    id: 'f-blaster',
    type: 'weapon',
    subtype: 'energy',
    name: 'Blaster',
    cost: 0,
    attack: 4,
    durability: 3
  }),
  defineCard({
    ...base,
    id: 'f-sword',
    type: 'weapon',
    subtype: 'sword',
    name: 'Sword',
    cost: 0,
    attack: 4,
    durability: 3
  }),
  defineCard({
    ...base,
    id: 'f-plate',
    type: 'armor',
    subtype: 'plate',
    name: 'Plate',
    cost: 0,
    armor: 1,
    durability: 3
  }),
  defineCard({
    ...base,
    id: 'f-staff',
    type: 'weapon',
    subtype: 'staff',
    name: 'Staff',
    cost: 0,
    attack: 1,
    durability: 3,
    spellPower: 2
  }),
  defineCard({
    ...base,
    id: 'f-bolt',
    type: 'ability',
    subtype: 'spell',
    name: 'Bolt',
    cost: 0,
    targets: ['enemySlot'],
    onPlay(ctx) {
      damage(ctx, ctx.targets[0], 5)
    }
  }),
  defineCard({
    ...base,
    id: 'f-frost',
    type: 'ability',
    subtype: 'spell',
    name: 'Frost',
    element: 'ice',
    cost: 0,
    targets: ['enemyAlly'],
    onPlay(ctx) {
      damage(ctx, ctx.targets[0], 4)
    }
  }),
  defineCard({
    ...base,
    id: 'f-strike',
    type: 'ability',
    subtype: 'tactic',
    name: 'Strike',
    cost: 0,
    targets: ['enemySlot'],
    onPlay(ctx) {
      damage(ctx, ctx.targets[0], 5)
    }
  }),
  defineCard({
    ...base,
    id: 'f-circlet',
    type: 'armor',
    subtype: 'circlet',
    name: 'Circlet',
    cost: 0,
    armor: 1,
    durability: 3,
    freezingSpells: true
  }),
  defineCard({
    ...base,
    id: 'f-channeler',
    type: 'ally',
    name: 'Channeler',
    cost: 0,
    attack: 1,
    health: 5,
    onOwnerPlay(ctx, card) {
      if (card.subtype === 'spell') {
        buffSelf(ctx, 1, 1)
      }
    }
  }),
  defineCard({
    ...base,
    id: 'f-stalk',
    type: 'ability',
    subtype: 'instinct',
    name: 'Stalk',
    cost: 0,
    targets: ['enemyAlly'],
    onPlay(ctx) {
      markPrey(ctx, ctx.targets[0])
    }
  }),
  defineCard({ ...base, id: 'f-hunter', type: 'ally', name: 'Hunter', cost: 0, attack: 2, health: 10, preyBonus: 3 }),
  defineCard({ ...base, id: 'f-target', type: 'ally', name: 'Target', cost: 0, attack: 0, health: 40 }),
  defineCard({
    ...base,
    id: 'f-guard',
    type: 'ally',
    name: 'Guard',
    cost: 0,
    attack: 0,
    health: 40,
    keywords: ['guardian']
  }),
  defineCard({
    ...base,
    id: 'f-pit',
    type: 'trap',
    name: 'Pit',
    cost: 0,
    trigger: 'enemyAttack',
    onTrigger(ctx, event) {
      if (event.unit) {
        damage(ctx, event.unit, 1)
      }
    }
  }),
  defineCard({
    ...base,
    id: 'f-trapper',
    type: 'ally',
    name: 'Trapper',
    cost: 0,
    attack: 1,
    health: 5,
    onTrapTriggered(ctx) {
      buffSelf(ctx, 2, 2)
    }
  }),
  defineCard({
    ...base,
    id: 'f-gladius',
    type: 'weapon',
    subtype: 'sword',
    name: 'Gladius',
    cost: 0,
    attack: 3,
    durability: 3,
    attackBonus(ctx, attacker) {
      return attacker.slot === 'hero' && hasPanoply(ctx) ? 2 : 0
    }
  }),
  defineCard({ ...base, id: 'f-clock', type: 'artifact', name: 'Clock', cost: 0, charges: 1 }),
  defineCard({
    ...base,
    id: 'f-forge',
    type: 'artifact',
    name: 'Forge',
    cost: 0,
    onPhaseStart(ctx) {
      heal(ctx, { player: ctx.owner, slot: 'hero' }, 5)
    },
    ability: {
      name: 'Spark',
      text: '',
      cost: 0,
      activate(ctx) {
        damageEnemyHero(ctx, 1)
      }
    }
  }),
  defineCard({
    ...base,
    id: 'f-scrapper',
    type: 'ally',
    name: 'Scrapper',
    cost: 0,
    attack: 1,
    health: 5,
    onArtifactLeave(ctx) {
      buffSelf(ctx, 2, 2)
    }
  }),
  defineCard({
    ...base,
    id: 'f-implant',
    type: 'attachment',
    subtype: 'implant',
    name: 'Implant',
    cost: 0,
    attack: 1,
    targets: ['friendlyAlly']
  }),
  defineCard({
    ...base,
    id: 'f-runner',
    type: 'ally',
    name: 'Runner',
    cost: 0,
    attack: 1,
    health: 5,
    auraKeywords(ctx, unit) {
      return isEnhanced(unit) ? ['quick'] : []
    }
  }),
  defineCard({
    ...base,
    id: 'f-hack',
    type: 'ability',
    subtype: 'program',
    name: 'Hack',
    cost: 0,
    targets: ['enemyArtifact'],
    onPlay(ctx) {
      disableSupportAt(ctx, ctx.targets[0], 1)
    }
  }),
  defineCard({
    ...base,
    id: 'f-rite',
    type: 'ability',
    subtype: 'ritual',
    name: 'Rite',
    cost: 0,
    consume: 3,
    onPlay(ctx) {
      damageEnemyHero(ctx, 10)
    }
  }),
  defineCard({
    ...base,
    id: 'f-curse',
    type: 'attachment',
    subtype: 'curse',
    name: 'Curse',
    cost: 0,
    targets: ['enemyAlly']
  }),
  defineCard({
    ...base,
    id: 'f-priest',
    type: 'ally',
    name: 'Priest',
    cost: 0,
    attack: 1,
    health: 5,
    onEnemyAllyDeath(ctx, unit) {
      if (isCursed(unit)) {
        heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
      }
    }
  })
]

registerCards(CARDS)

const HERO_B = { player: 'b', slot: 'hero' } as const

function run(state: MatchState, a: Timeline = emptyTimeline(), b: Timeline = emptyTimeline()) {
  return resolvePhase(state, { a, b })
}

function fails(events: MatchEvent[]): string[] {
  return events.flatMap((event) => (event.type === 'fail' ? [event.reason] : []))
}

function equip(state: MatchState, player: PlayerId, cardId: string): void {
  const definition = CARDS.find((card) => card.id === cardId)!
  const card = { uid: state.nextUid++, cardId }

  if (definition.type === 'weapon') {
    state.players[player].hero.weapon = { card, attack: definition.attack!, durability: definition.durability! }
  } else {
    state.players[player].hero.armor = { card, reduction: definition.armor!, durability: definition.durability! }
  }
}

function artifact(state: MatchState, player: PlayerId, cardId: string, charges?: number): CardInstance {
  const card = { uid: state.nextUid++, cardId, ...(charges != null ? { charges } : {}) }

  state.players[player].artifacts.push(card)

  return card
}

function hurt(state: MatchState, player: PlayerId, amount: number): void {
  state.players[player].hero.health -= amount
}

describe('subtypes', () => {
  it('a weapon, an armor, an ability and an attachment need a subtype of their type', () => {
    const weapon = { ...base, id: 'f-x', type: 'weapon', name: 'X', cost: 0, attack: 1, durability: 1 } as const

    expect(() => defineCard(weapon)).toThrow(/needs "subtype"/)
    expect(() => defineCard({ ...weapon, subtype: 'spell' })).toThrow(/not a subtype of weapon/)
    expect(() =>
      defineCard({ ...base, id: 'f-y', type: 'ally', name: 'Y', cost: 0, attack: 1, health: 1, subtype: 'bow' })
    ).toThrow(/has no subtype/)
  })

  it("a bow makes the hero's attack ranged (it flies over a guardian), a sword doesn't", () => {
    for (const [weapon, ranged] of [
      ['f-bow', true],
      ['f-sword', false]
    ] as const) {
      const state = testMatch()

      equip(state, 'a', weapon)
      place(state, 'b', 'f-guard', 0)

      const next = run(state, timeline({ kind: 'heroAttack', target: HERO_B })).state

      expect(next.players.b.hero.health, weapon).toBe(ranged ? 46 : 50)
    }
  })

  it("an energy weapon makes the hero's attack quick (fast)", () => {
    const state = testMatch()
    const engine = new MatchEngine(state)

    equip(state, 'a', 'f-blaster')
    expect(actionSpeed(engine, 'a', { kind: 'heroAttack', target: HERO_B })).toBe('fast')
    equip(state, 'a', 'f-sword')
    expect(actionSpeed(engine, 'a', { kind: 'heroAttack', target: HERO_B })).toBe('normal')
  })
})

describe('spell power and channeling (arcane)', () => {
  it("adds the owner's spell power to the damage of a spell, not of another ability", () => {
    const state = testMatch()

    equip(state, 'a', 'f-staff')
    give(state, 'a', 'f-bolt')
    give(state, 'a', 'f-strike')

    const [bolt, strike] = state.players.a.hand.slice(-2)
    const next = run(
      state,
      timeline(
        { kind: 'play', cardUid: bolt.uid, targets: [HERO_B] },
        { kind: 'play', cardUid: strike.uid, targets: [HERO_B] }
      )
    ).state

    expect(next.players.b.hero.health).toBe(50 - 7 - 5)
  })

  it('an ally that channels grows each time its owner plays a spell (onOwnerPlay)', () => {
    const state = testMatch()
    const channeler = place(state, 'a', 'f-channeler', 0)
    const bolt = give(state, 'a', 'f-bolt')
    const strike = give(state, 'a', 'f-strike')
    const next = run(
      state,
      timeline(
        { kind: 'play', cardUid: bolt.uid, targets: [HERO_B] },
        { kind: 'play', cardUid: strike.uid, targets: [HERO_B] }
      )
    ).state

    expect(next.players.a.allies[0]).toMatchObject({ uid: channeler.uid, attack: 2, health: 6 })
  })

  it('with freezingSpells, an ice spell also freezes what it hit, after the damage (not doubled)', () => {
    const state = testMatch()

    equip(state, 'a', 'f-circlet')
    place(state, 'b', 'f-target', 0)

    const frost = give(state, 'a', 'f-frost')
    const next = run(state, timeline({ kind: 'play', cardUid: frost.uid, targets: [{ player: 'b', slot: 0 }] })).state
    const target = next.players.b.allies[0]!

    expect(target.health).toBe(36)
    expect(target.frozenUntilPhase).toBeGreaterThanOrEqual(next.phase)
  })
})

describe('prey and traps (primal)', () => {
  it("a Prey takes +3 from its hunter's ranged attacks, and a preyBonus card adds to every attack", () => {
    const state = testMatch()

    equip(state, 'a', 'f-bow')
    place(state, 'b', 'f-target', 0)

    const stalk = give(state, 'a', 'f-stalk')
    const target = { player: 'b', slot: 0 } as const
    const next = run(
      state,
      timeline({ kind: 'play', cardUid: stalk.uid, targets: [target] }, { kind: 'heroAttack', target })
    ).state

    expect(next.players.b.allies[0]!.health).toBe(40 - 4 - 3)
    expect(next.players.b.allies[0]!.prey).toMatchObject({ by: 'a' })

    // A melee hunter: only its preyBonus counts.
    const hunter = place(next, 'a', 'f-hunter', 0)
    const after = run(next, timeline({ kind: 'allyAttack', allyUid: hunter.uid, target })).state

    expect(after.players.b.allies[0]!.health).toBe(33 - 2 - 3)
  })

  it('the mark lasts until the end of the next phase', () => {
    let state = testMatch()

    place(state, 'b', 'f-target', 0)

    const stalk = give(state, 'a', 'f-stalk')

    state = run(state, timeline({ kind: 'play', cardUid: stalk.uid, targets: [{ player: 'b', slot: 0 }] })).state

    const engine = new MatchEngine(state)

    expect(engine.isPreyOf(state.players.b.allies[0]!, 'a')).toBe(true)
    state = run(state).state
    expect(state.players.b.allies[0]!.prey).toBeUndefined()
  })

  it('onTrapTriggered runs for the cards of the trap owner', () => {
    const state = testMatch()
    const trapper = place(state, 'a', 'f-trapper', 0)
    const attacker = place(state, 'b', 'f-target', 0)

    attacker.attack = 1
    state.players.a.traps.push({ uid: state.nextUid++, cardId: 'f-pit' })

    const next = run(
      state,
      emptyTimeline(),
      timeline({ kind: 'allyAttack', allyUid: attacker.uid, target: { player: 'a', slot: 'hero' } })
    ).state

    expect(next.players.a.allies[0]).toMatchObject({ uid: trapper.uid, attack: 3, health: 7 })
  })

  it('isPrey tells whether an ally is the Prey of the owner', () => {
    const state = testMatch()
    const unit = place(state, 'b', 'f-target', 0)
    const engine = new MatchEngine(state)
    const ctx = engine.context('a', { uid: 0, cardId: 'f-stalk' })

    expect(isPrey(ctx, unit)).toBe(false)
    engine.markPrey(unit.uid, 'a')
    expect(isPrey(ctx, unit)).toBe(true)
    expect(isPrey(engine.context('b', { uid: 0, cardId: 'f-stalk' }), unit)).toBe(false)
  })
})

describe('panoply (bronze)', () => {
  it('hasPanoply is a weapon and an armor; an attackBonus aura adds to the attack', () => {
    for (const [armor, expected] of [
      [true, 45],
      [false, 47]
    ] as const) {
      const state = testMatch()

      equip(state, 'a', 'f-gladius')

      if (armor) {
        equip(state, 'a', 'f-plate')
      }

      const next = run(state, timeline({ kind: 'heroAttack', target: HERO_B })).state

      expect(next.players.b.hero.health, String(armor)).toBe(expected)
    }
  })
})

describe('artifacts: count, recharge and scrap (clockwork)', () => {
  it('recharge adds uses to one or every artifact with uses', () => {
    const state = testMatch()
    const clock = artifact(state, 'a', 'f-clock', 1)
    const other = artifact(state, 'a', 'f-clock', 2)

    artifact(state, 'a', 'f-forge')

    const engine = new MatchEngine(state)
    const ctx = engine.context('a', { uid: 0, cardId: 'f-scrapper' })

    expect(recharge(ctx, clock.uid, 2)).toBe(1)
    expect(clock.charges).toBe(3)
    expect(recharge(ctx, 'all', 1)).toBe(2)
    expect([clock.charges, other.charges]).toEqual([4, 3])
  })

  it('onArtifactLeave runs when an artifact of the owner runs out of uses or is destroyed', () => {
    const state = testMatch()
    const scrapper = place(state, 'a', 'f-scrapper', 0)
    const clock = artifact(state, 'a', 'f-clock', 1)
    const forge = artifact(state, 'a', 'f-forge')
    const engine = new MatchEngine(state)

    engine.spendCharge('a', clock.uid)
    expect(engine.destroySupport('a', forge.uid)).toBe(true)
    expect(state.players.a.artifacts).toEqual([])
    expect(state.players.a.allies[0]).toMatchObject({ uid: scrapper.uid, attack: 5, health: 9 })
  })
})

describe('enhanced allies and hacks (neon)', () => {
  it('an ally with an implant is Enhanced, and an aura can make it quick', () => {
    const state = testMatch()

    place(state, 'a', 'f-runner', 0)

    const host = place(state, 'a', 'f-target', 1)
    const implant = give(state, 'a', 'f-implant')
    const next = run(state, timeline({ kind: 'play', cardUid: implant.uid, targets: [{ player: 'a', slot: 1 }] })).state
    const unit = next.players.a.allies[1]!
    const engine = new MatchEngine(next)

    expect(isEnhanced(unit)).toBe(true)
    expect(isEnhanced(next.players.a.allies[0]!)).toBe(false)
    expect(actionSpeed(engine, 'a', { kind: 'allyAttack', allyUid: host.uid, target: HERO_B })).toBe('fast')
  })

  it('a hacked artifact does nothing and its ability fails while it is switched off', () => {
    let state = testMatch()
    const forge = artifact(state, 'b', 'f-forge')
    const hack = give(state, 'a', 'f-hack')

    hurt(state, 'b', 20)
    state = run(
      state,
      timeline({ kind: 'play', cardUid: hack.uid, targets: [{ player: 'b', slot: 'hero', attached: forge.uid }] }),
      timeline({ kind: 'wait' }, { kind: 'artifactAbility', artifactUid: forge.uid })
    ).state

    // The forge didn't heal at the start of phase 2, and its ability failed in phase 1.
    expect(state.players.b.hero.health).toBe(30)

    const result = run(state, emptyTimeline(), timeline({ kind: 'artifactAbility', artifactUid: forge.uid }))

    expect(fails(result.events)).toEqual(['disabled'])
    // Back at the start of phase 3.
    expect(result.state.players.b.hero.health).toBe(35)
  })

  it('a hacked trap does not go off; a friendly target must be an artifact of your own', () => {
    const state = testMatch()
    const trap = { uid: state.nextUid++, cardId: 'f-pit' }
    const attacker = place(state, 'b', 'f-target', 0)
    const engine = new MatchEngine(state)

    attacker.attack = 1
    state.players.a.traps.push(trap)
    expect(engine.disableSupport('a', trap.uid, 1)).toBe(true)

    const next = run(
      state,
      emptyTimeline(),
      timeline({ kind: 'allyAttack', allyUid: attacker.uid, target: { player: 'a', slot: 'hero' } })
    ).state

    expect(next.players.a.traps.map((card) => card.uid)).toEqual([trap.uid])
    expect(next.players.a.hero.health).toBe(49)
  })
})

describe('consume and curses (void)', () => {
  it('Consume X banishes X cards of the discard pile (allies last), and fails without paying when there are fewer', () => {
    const state = testMatch()
    const side = state.players.a
    const rite = give(state, 'a', 'f-rite')

    side.discard.push({ uid: state.nextUid++, cardId: 'f-target' }, { uid: state.nextUid++, cardId: 'f-bolt' })

    const short = run(state, timeline({ kind: 'play', cardUid: rite.uid }))

    expect(fails(short.events)).toEqual(['notEnoughDiscard'])
    expect(short.state.players.a.hand.some((card) => card.uid === rite.uid)).toBe(true)

    side.discard.push({ uid: state.nextUid++, cardId: 'f-strike' }, { uid: state.nextUid++, cardId: 'f-frost' })

    const paid = run(state, timeline({ kind: 'play', cardUid: rite.uid })).state

    expect(paid.players.b.hero.health).toBe(40)
    // The ally stayed; the 3 others were banished, and the rite itself went to the pile (a full hand burns the draw).
    expect(paid.players.a.discard.map((card) => card.cardId).slice(0, 2)).toEqual(['f-target', 'f-rite'])
  })

  it('onEnemyAllyDeath sees the curses still on the ally that died', () => {
    const state = testMatch()

    place(state, 'a', 'f-priest', 0)
    place(state, 'b', 'f-target', 0).health = 3
    hurt(state, 'a', 10)

    const curse = give(state, 'a', 'f-curse')
    const bolt = give(state, 'a', 'f-strike')
    const next = run(
      state,
      timeline(
        { kind: 'play', cardUid: curse.uid, targets: [{ player: 'b', slot: 0 }] },
        { kind: 'play', cardUid: bolt.uid, targets: [{ player: 'b', slot: 0 }] }
      )
    ).state

    expect(next.players.b.allies[0]).toBeNull()
    expect(next.players.a.hero.health).toBe(44)
  })
})
