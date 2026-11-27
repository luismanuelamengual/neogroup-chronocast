import '@/app/(protected)/(cards)/utils/catalog'
import { describe, expect, it } from 'vitest'
import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { planTimeline } from '@/app/(protected)/(engine)/ai/planTimeline'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, PlannedAction, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { MatchEngine } from '@/app/(protected)/(engine)/utils/engine'
import { actionSpeed, resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { HIDDEN_CARD, redactState } from '@/app/(protected)/(pvp)/utils/redact'
import { sanitizeTimeline } from '@/app/(protected)/(pvp)/utils/sanitizeTimeline'

/** A match with the hero to try as "a": 10 energy, 20 Chronos, an empty hand, and the allies given. */
function match(heroId: string, allies: { a?: string[]; b?: string[] } = {}): MatchState {
  const deck = starterDeck(STARTER_HERO_IDS[0])
  const { state } = createMatch({
    seed: 5,
    decks: { a: { ...deck, heroId }, b: deck },
    setup: {
      a: { allies: allies.a ?? [], chronosCapacity: 20, energy: 10 },
      b: { allies: allies.b ?? [], chronosCapacity: 20, energy: 10 }
    }
  })

  state.players.a.hand = []

  for (const unit of [...state.players.a.allies, ...state.players.b.allies]) {
    if (unit) {
      unit.enteredPhase = 0
    }
  }

  return state
}

function plan(...actions: PlannedAction[]): Timeline {
  const timeline = emptyTimeline()

  actions.forEach((action, index) => (timeline[index] = action))

  return timeline
}

function run(state: MatchState, a: Timeline = emptyTimeline()) {
  const result = resolvePhase(state, { a, b: emptyTimeline() })

  return { ...result, fails: result.events.flatMap((event) => (event.type === 'fail' ? [event.reason] : [])) }
}

const ability = (cardId?: string): PlannedAction => ({
  kind: 'heroAbility',
  targets: [],
  ...(cardId ? { cardId } : {})
})

function card(state: MatchState, cardId: string) {
  return { uid: state.nextUid++, cardId }
}

describe("the heroes' abilities", () => {
  it('Malachar freezes every enemy ally for the rest of the phase and all of the next one (a spell)', () => {
    const state = match('malachar-the-unmade', { b: ['faithful-wanderer', 'hoplite-conscript'] })
    const [wanderer, conscript] = state.players.b.allies
    const attack: PlannedAction = { kind: 'allyAttack', allyUid: wanderer!.uid, target: { player: 'a', slot: 'hero' } }
    const failsOf = (events: { type: string; reason?: string }[]) =>
      events.flatMap((event) => (event.type === 'fail' ? [event.reason] : []))
    // The Wanderer tries to attack after the ability (next step): it's frozen.
    const first = resolvePhase(state, { a: plan(ability()), b: plan({ kind: 'wait' }, attack) })

    expect(failsOf(first.events)).toEqual(['frozen'])
    // No damage.
    expect(first.state.players.b.allies[0]!.health).toBe(wanderer!.health)
    expect(first.state.players.b.allies[1]!.health).toBe(conscript!.health)

    // Still frozen all of the next phase; it thaws when the one after starts.
    const second = resolvePhase(first.state, { a: emptyTimeline(), b: plan(attack) })

    expect(failsOf(second.events)).toEqual(['frozen'])

    const third = resolvePhase(second.state, { a: emptyTimeline(), b: plan(attack) })

    expect(failsOf(third.events)).toEqual([])
    expect(third.events.some((event) => event.type === 'attack')).toBe(true)
  })

  it('Malachar needs 6 energy for Unmaking Frost', () => {
    const state = match('malachar-the-unmade', { b: ['faithful-wanderer'] })

    state.players.a.energy = 5
    expect(run(state, plan(ability())).fails).not.toEqual([])
  })

  it('Kora marks the ally she hits as Prey, and gains 1 energy when a trap of hers goes off', () => {
    const state = match('kora-wildfang', { b: ['faithful-wanderer'] })
    const { state: next, fails } = run(state, plan({ kind: 'heroAbility', targets: [{ player: 'b', slot: 0 }] }))

    expect(fails).toEqual([])
    expect(next.players.b.allies[0]!.prey).toMatchObject({ by: 'a' })

    const trapped = match('kora-wildfang')
    const ally = card(trapped, 'faithful-wanderer')

    trapped.players.a.energy = 5
    trapped.players.a.traps.push(card(trapped, 'cursed-trap'))
    trapped.players.b.hand.push(ally)

    const summoned = resolvePhase(trapped, {
      a: emptyTimeline(),
      b: plan({ kind: 'play', cardUid: ally.uid, slot: 0 })
    }).state

    expect(summoned.players.a.traps).toEqual([])
    // 5, +1 of the trap, +1 of the new phase.
    expect(summoned.players.a.energy).toBe(7)
  })

  it('Kora deals 6 damage and draws a card', () => {
    const state = match('kora-wildfang')
    const health = state.players.b.hero.health
    const { state: next, fails } = run(state, plan({ kind: 'heroAbility', targets: [{ player: 'b', slot: 'hero' }] }))

    expect(fails).toEqual([])
    expect(next.players.b.hero.health).toBe(health - 6)
    // The card of the ability, and the one of the new phase.
    expect(next.players.a.hand).toHaveLength(2)
  })

  it('Ilyra deals 5 arcane damage to three different enemy slots, never twice to the same one', () => {
    const state = match('ilyra-starweaver', { b: ['faithful-wanderer', 'faithful-wanderer'] })
    const health = state.players.b.hero.health
    const { state: next, fails } = run(
      state,
      plan({
        kind: 'heroAbility',
        targets: [
          { player: 'b', slot: 'hero' },
          { player: 'b', slot: 0 },
          { player: 'b', slot: 1 }
        ]
      })
    )

    expect(fails).toEqual([])
    expect(next.players.b.hero.health).toBe(health - 5)
    expect(next.players.b.allies[0]!.health).toBe(9 - 5)
    expect(next.players.b.allies[1]!.health).toBe(9 - 5)

    const twice = run(
      match('ilyra-starweaver', { b: ['faithful-wanderer'] }),
      plan({
        kind: 'heroAbility',
        targets: [
          { player: 'b', slot: 'hero' },
          { player: 'b', slot: 0 },
          { player: 'b', slot: 0 }
        ]
      })
    )

    expect(twice.fails).toEqual(['invalidTarget'])
    expect(twice.state.players.a.energy).toBe(10)
  })

  it('Caelus gives his allies +1 attack each phase only while he has a weapon', () => {
    const bare = match('caelus-the-usurper', { a: ['faithful-wanderer'] })
    const armed = match('caelus-the-usurper', { a: ['faithful-wanderer'] })

    armed.players.a.hero.weapon = { card: card(armed, 'centurions-gladius'), attack: 3, durability: 3 }

    expect(run(bare).state.players.a.allies[0]!.attack).toBe(4)
    expect(run(armed).state.players.a.allies[0]!.attack).toBe(5)
  })

  it("Caelus's Tribute takes 1 Chronos capacity from the rival and gives it to him", () => {
    const idle = run(match('caelus-the-usurper')).state
    const { state: next, fails } = run(match('caelus-the-usurper'), plan(ability()))

    expect(fails).toEqual([])
    expect(next.players.a.chronosCapacity).toBe(idle.players.a.chronosCapacity + 1)
    expect(next.players.b.chronosCapacity).toBe(idle.players.b.chronosCapacity - 1)
  })

  it('Nyx heals 3 when an enemy ally with a curse dies', () => {
    const state = match('nyx-hollowsong', { b: ['faithful-wanderer'] })
    const curse = card(state, 'iron-mark')

    state.players.a.hero.health = 40
    state.players.b.allies[0]!.attachments = [{ ...curse, owner: 'a' }]
    state.players.b.allies[0]!.health = 1
    state.players.a.hero.weapon = { card: card(state, 'centurions-gladius'), attack: 3, durability: 3 }

    const { state: next } = run(state, plan({ kind: 'heroAttack', target: { player: 'b', slot: 0 } }))

    expect(next.players.b.allies[0]).toBeNull()
    expect(next.players.a.hero.health).toBe(43)
  })

  it('Ilyra has spell power +1: her spells deal 1 more damage', () => {
    const state = match('ilyra-starweaver')
    const bolt = card(state, 'astral-bolt')

    state.players.a.hand.push(bolt)

    const health = state.players.b.hero.health
    const { state: next } = run(
      state,
      plan({ kind: 'play', cardUid: bolt.uid, targets: [{ player: 'b', slot: 'hero' }] })
    )

    expect(next.players.b.hero.health).toBe(health - 7)
  })

  it('Brassmaw heals 1 for each artifact of his at the end of the phase, up to 3', () => {
    const state = match('chancellor-brassmaw')

    state.players.a.hero.health = 40

    for (let i = 0; i < 4; i++) {
      state.players.a.artifacts.push(card(state, 'altar-of-lost-time'))
    }

    expect(run(state).state.players.a.hero.health).toBe(43)
  })

  it("Vex's Enhanced allies (with an implant) are quick", () => {
    const state = match('vex-nightwire', { a: ['faithful-wanderer', 'spark-of-dusk'] })
    const implant = card(state, 'neural-implant')

    state.players.a.allies[1]!.attachments = [{ ...card(state, 'plating-of-mana'), owner: 'a' }]
    state.players.a.hand.push(implant)

    const engine = new MatchEngine(state)
    const [plain, enhanced] = state.players.a.allies

    expect(
      actionSpeed(engine, 'a', { kind: 'allyAttack', allyUid: plain!.uid, target: { player: 'b', slot: 'hero' } })
    ).toBe('normal')
    expect(
      actionSpeed(engine, 'a', { kind: 'allyAttack', allyUid: enhanced!.uid, target: { player: 'b', slot: 'hero' } })
    ).toBe('fast')
  })

  it("Varro's Legionnaires deal 1 more damage while he has a weapon and an armor", () => {
    const attackWith = (panoply: boolean) => {
      const state = match('legate-varro', { a: ['hoplite-conscript'] })

      if (panoply) {
        state.players.a.hero.weapon = { card: card(state, 'centurions-gladius'), attack: 3, durability: 3 }
        state.players.a.hero.armor = { card: card(state, 'legion-shield'), reduction: 2, durability: 4 }
      }

      const health = state.players.b.hero.health
      const uid = state.players.a.allies[0]!.uid

      return (
        health -
        run(state, plan({ kind: 'allyAttack', allyUid: uid, target: { player: 'b', slot: 'hero' } })).state.players.b
          .hero.health
      )
    }

    expect(attackWith(false)).toBe(1)
    expect(attackWith(true)).toBe(2)
  })

  it('Nyx gives every enemy ally -2 attack', () => {
    const state = match('nyx-hollowsong', { b: ['faithful-wanderer', 'spark-of-dusk'] })
    const attacks = state.players.b.allies.slice(0, 2).map((unit) => unit!.attack)
    const { state: next, fails } = run(state, plan(ability()))

    expect(fails).toEqual([])
    expect(next.players.b.allies.slice(0, 2).map((unit) => unit!.attack)).toEqual(
      attacks.map((attack) => Math.max(0, attack - 2))
    )
  })

  it('Queen Static makes the rival discard 2 random cards at the end of the phase', () => {
    const state = match('queen-static')
    const hand = state.players.b.hand.length
    const { state: next, fails, events } = run(state, plan(ability()))

    expect(hand).toBeGreaterThanOrEqual(2)
    expect(fails).toEqual([])
    expect(events.filter((event) => event.type === 'discard')).toHaveLength(2)
    // Two discarded, and the draw of the new phase.
    expect(next.players.b.hand).toHaveLength(hand - 2 + 1)
  })

  it('Ada puts the chosen artifact of the deck in play for free and shuffles the deck', () => {
    const state = match('ada-copperwick')

    state.players.a.deck.unshift(card(state, 'brazier-of-the-wanderer'))

    const size = state.players.a.deck.length
    const chronos = state.players.a.chronos
    const { state: next, fails, events } = run(state, plan(ability('brazier-of-the-wanderer')))

    expect(fails).toEqual([])
    expect(next.players.a.artifacts.map((entry) => entry.cardId)).toEqual(['brazier-of-the-wanderer'])
    expect(next.players.a.deck.some((entry) => entry.cardId === 'brazier-of-the-wanderer')).toBe(false)
    // One card less, and the draw of the new phase.
    expect(next.players.a.deck).toHaveLength(size - 2)
    expect(events.some((event) => event.type === 'chronos')).toBe(false)
    expect(chronos).toBe(20)
  })

  it('Ada fails without spending energy when the chosen card is not an artifact of the deck', () => {
    const state = match('ada-copperwick')
    const { state: next, fails } = run(state, plan(ability('brazier-of-the-wanderer'), ability()))

    expect(fails).toEqual(['noChoice', 'noChoice'])
    expect(next.players.a.energy).toBe(10)
  })

  it('Vex hides his hero and his allies until the end of the phase: the rival can not attack them nor target them', () => {
    const state = match('vex-nightwire', { a: ['spark-of-dusk'], b: ['faithful-wanderer'] })
    const [first, second] = [card(state, 'astral-bolt'), card(state, 'astral-bolt')]

    state.players.b.hand.push(first, second)
    state.players.b.chronos = 10

    const health = state.players.a.hero.health
    const result = resolvePhase(state, {
      a: plan(ability()),
      b: plan(
        { kind: 'wait' },
        { kind: 'allyAttack', allyUid: state.players.b.allies[0]!.uid, target: { player: 'a', slot: 'hero' } },
        { kind: 'play', cardUid: first.uid, targets: [{ player: 'a', slot: 'hero' }] },
        { kind: 'play', cardUid: second.uid, targets: [{ player: 'a', slot: 0 }] }
      )
    })
    const fails = result.events.flatMap((event) => (event.type === 'fail' ? [event.reason] : []))

    expect(result.events.some((event) => event.type === 'miss')).toBe(true)
    expect(fails).toEqual(['invalidTarget', 'invalidTarget'])
    expect(result.state.players.a.hero.health).toBe(health)
    expect(result.state.players.a.energy).toBe(10 - 3 + 1)
    // It ends with the phase: no +attack, nothing left for the next one.
    expect(result.state.players.a.hero.veil).toBeUndefined()
    expect(result.state.players.a.allies[0]!.keywords).not.toContain('stealth')
    expect(result.state.players.a.allies[0]!.veil).toBeUndefined()
  })

  it("the stealth of Vex's Ghost Protocol isn't lost by attacking, but sonic damage still breaks it", () => {
    const state = match('vex-nightwire', { a: ['spark-of-dusk'] })
    const ally = state.players.a.allies[0]!
    const bolt = card(state, 'astral-bolt')

    state.players.b.hand.push(bolt)
    state.players.b.chronos = 10

    const result = resolvePhase(state, {
      a: plan(ability(), { kind: 'allyAttack', allyUid: ally.uid, target: { player: 'b', slot: 'hero' } }),
      // After the attack, the ally is still hidden.
      b: plan(
        { kind: 'wait' },
        { kind: 'wait' },
        { kind: 'play', cardUid: bolt.uid, targets: [{ player: 'a', slot: 0 }] }
      )
    })

    expect(result.events.some((event) => event.type === 'attack')).toBe(true)
    expect(result.events.flatMap((event) => (event.type === 'fail' ? [event.reason] : []))).toEqual(['invalidTarget'])

    const hidden = match('vex-nightwire', { a: ['spark-of-dusk'] })
    const unit = hidden.players.a.allies[0]!

    hidden.players.a.hero.veil = { untilPhase: hidden.phase }
    unit.keywords.push('stealth')
    unit.veil = { attack: 0, stealth: true, untilPhase: hidden.phase }

    const engine = new MatchEngine(hidden)

    engine.damageHero('a', 1, { player: 'b', element: 'sonic' })
    engine.damageUnit(unit.uid, 1, { player: 'b', element: 'sonic' })
    engine.flush()
    expect(hidden.players.a.hero.veil).toBeUndefined()
    expect(unit.keywords).not.toContain('stealth')
  })

  it("the computer doesn't aim at a hidden hero nor at hidden allies (it holds)", () => {
    const state = match('ada-copperwick', { a: ['faithful-wanderer'], b: ['spark-of-dusk'] })

    state.players.b.hero.veil = { untilPhase: state.phase }
    state.players.b.allies[0]!.keywords.push('stealth')

    const timeline = planTimeline(state, 'a')
    const aimed = timeline.flatMap((action) =>
      'target' in action ? [action.target] : 'targets' in action ? (action.targets ?? []) : []
    )

    expect(aimed.filter((ref) => ref.player === 'b' && (ref.slot === 'hero' || ref.slot === 0))).toEqual([])
  })

  it("Varro's allies take 2 less damage and his side deals 2 more, until the end of the next phase", () => {
    const state = match('legate-varro', { a: ['faithful-wanderer'], b: ['faithful-wanderer'] })
    const attack = (from: 'a' | 'b'): PlannedAction => ({
      kind: 'allyAttack',
      allyUid: state.players[from].allies[0]!.uid,
      target: { player: from === 'a' ? 'b' : 'a', slot: 0 }
    })
    const first = resolvePhase(state, { a: plan(ability(), attack('a')), b: plan({ kind: 'wait' }, attack('b')) }).state

    // 4 attack: 4 + 2 to the rival's ally, 4 - 2 to Varro's.
    expect(first.players.b.allies[0]!.health).toBe(9 - 6)
    expect(first.players.a.allies[0]!.health).toBe(9 - 2)
    expect(first.players.a.boons?.length).toBe(2)
    expect(run(first).state.players.a.boons).toEqual([])
  })

  it('Malachar deals 1 shadow damage to the enemy hero each time he plays a spell', () => {
    const state = match('malachar-the-unmade')
    const spell = card(state, 'flickering-bolt')

    state.players.a.hand.push(spell)
    state.players.a.chronos = 10

    const health = state.players.b.hero.health
    const { state: next, fails } = run(
      state,
      plan({ kind: 'play', cardUid: spell.uid, targets: [{ player: 'b', slot: 'hero' }] })
    )

    expect(fails).toEqual([])
    expect(next.players.b.hero.health).toBeLessThan(health - 1)
  })

  it('Morgrath brings back the last ally that was defeated, and banishes nothing', () => {
    const state = match('morgrath-lich-abbot')

    state.players.a.discard.push(
      { ...card(state, 'faithful-wanderer'), defeated: true },
      { ...card(state, 'hoplite-conscript'), defeated: true },
      card(state, 'flickering-bolt'),
      // On top, but discarded from the hand: it was never defeated.
      card(state, 'old-chrononaut')
    )

    const { state: next, fails } = run(state, plan(ability()))

    expect(fails).toEqual([])
    expect(next.players.a.allies.filter(Boolean).map((unit) => unit!.cardId)).toEqual(['hoplite-conscript'])
    expect(next.players.a.discard.map((entry) => entry.cardId)).toEqual([
      'faithful-wanderer',
      'flickering-bolt',
      'old-chrononaut'
    ])
  })

  it('an ally that dies on the board goes to the discard pile as defeated, and Morgrath raises it', () => {
    const state = match('morgrath-lich-abbot', { a: ['hoplite-conscript'] })
    const bolt = card(state, 'astral-bolt')

    state.players.a.allies[0]!.health = 1
    state.players.b.hand.push(bolt)
    state.players.b.chronos = 10

    const { state: died } = resolvePhase(state, {
      a: emptyTimeline(),
      b: plan({ kind: 'play', cardUid: bolt.uid, targets: [{ player: 'a', slot: 0 }] })
    })

    expect(died.players.a.discard).toContainEqual(
      expect.objectContaining({ cardId: 'hoplite-conscript', defeated: true })
    )

    died.players.a.energy = 10

    const { state: next, fails } = run(died, plan(ability()))

    expect(fails).toEqual([])
    expect(next.players.a.allies.filter(Boolean).map((unit) => unit!.cardId)).toEqual(['hoplite-conscript'])
  })

  it("Morgrath can't raise an ally that was only discarded or turned into Chronos", () => {
    const state = match('morgrath-lich-abbot')
    const fodder = card(state, 'old-chrononaut')

    state.players.a.discard.push(
      card(state, 'faithful-wanderer'),
      card(state, 'hoplite-conscript'),
      card(state, 'flickering-bolt'),
      card(state, 'astral-bolt')
    )
    state.players.a.hand.push(fodder)

    const { state: next, fails } = run(state, plan({ kind: 'sacrifice', cardUid: fodder.uid }, ability()))

    expect(fails).toEqual(['noChoice'])
    expect(next.players.a.discard.map((entry) => entry.cardId)).not.toContain('old-chrononaut')
    expect(next.players.a.allies.filter(Boolean)).toEqual([])
  })

  it("Morgrath can't raise without a defeated ally or a free slot", () => {
    const empty = match('morgrath-lich-abbot')

    expect(run(empty, plan(ability())).fails).toEqual(['noChoice'])

    const full = match('morgrath-lich-abbot', {
      a: ['faithful-wanderer', 'faithful-wanderer', 'faithful-wanderer', 'faithful-wanderer', 'faithful-wanderer']
    })

    full.players.a.discard.push({ ...card(full, 'hoplite-conscript'), defeated: true })
    expect(run(full, plan(ability())).fails).toEqual(['slotsFull'])
  })

  it('Morgrath deals 2 shadow damage to a random enemy ally when another ally of his dies', () => {
    const state = match('morgrath-lich-abbot', { a: ['faithful-wanderer'], b: ['moonlit-basilisk'] })
    // The rival's Astral Bolt (6 arcane damage) kills Morgrath's Wanderer.
    const bolt = card(state, 'astral-bolt')

    state.players.a.allies[0]!.health = 1
    state.players.b.hand.push(bolt)
    state.players.b.chronos = 10

    const before = state.players.b.allies[0]!.health
    const result = resolvePhase(state, {
      a: emptyTimeline(),
      b: plan({ kind: 'play', cardUid: bolt.uid, targets: [{ player: 'a', slot: 0 }] })
    })

    expect(result.state.players.a.allies[0]).toBeNull()
    expect(result.state.players.b.allies[0]!.health).toBe(before - 2)
  })

  it('online, a player sees the artifacts of their own deck but not its order or the other cards', () => {
    const state = match('ada-copperwick')

    state.players.a.deck.push(card(state, 'brazier-of-the-wanderer'))

    const view = redactState(state, 'a')
    const artifacts = view.players.a.deck.filter((entry) => entry.cardId !== HIDDEN_CARD)

    expect(artifacts.map((entry) => entry.cardId)).toContain('brazier-of-the-wanderer')
    expect(view.players.a.deck).toHaveLength(state.players.a.deck.length)
    // The artifacts go to the bottom: the top of the deck (the next draw) stays hidden.
    expect(view.players.a.deck.at(-1)?.cardId).toBe(HIDDEN_CARD)
    expect(view.players.b.deck.every((entry) => entry.cardId === HIDDEN_CARD)).toBe(true)
  })
})

describe('a timeline sent online', () => {
  it('keeps the card chosen for a hero ability, and refuses an unknown one', () => {
    const [kept] = sanitizeTimeline([{ kind: 'heroAbility', cardId: 'brazier-of-the-wanderer' }])

    expect(kept).toEqual({ kind: 'heroAbility', cardId: 'brazier-of-the-wanderer' })
    expect(() => sanitizeTimeline([{ kind: 'heroAbility', cardId: 'no-such-card' }])).toThrow()
    expect(() => sanitizeTimeline([{ kind: 'heroAbility', cardId: 42 }])).toThrow()
  })
})
