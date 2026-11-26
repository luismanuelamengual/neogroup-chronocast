import '@/app/(protected)/(cards)/utils/catalog'
import { describe, expect, it } from 'vitest'
import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, PlannedAction, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
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
  it('Morgrath brings back the ally on top of the discard pile', () => {
    const state = match('morgrath-lich-abbot')

    state.players.a.discard = [card(state, 'spark-of-dusk'), card(state, 'faithful-wanderer')]

    const { state: next, fails } = run(state, plan(ability()))

    expect(fails).toEqual([])
    expect(next.players.a.allies.filter(Boolean).map((unit) => unit!.cardId)).toEqual(['faithful-wanderer'])
    expect(next.players.a.discard.map((entry) => entry.cardId)).toEqual(['spark-of-dusk'])
  })

  it('Morgrath with no ally in the discard pile fails without spending energy', () => {
    const state = match('morgrath-lich-abbot')
    const { state: next, fails } = run(state, plan(ability()))

    expect(fails).toEqual(['noChoice'])
    expect(next.players.a.energy).toBe(10)
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

  it('Ilyra deals 7 arcane damage to two different enemy slots, never twice to the same one', () => {
    const state = match('ilyra-starweaver', { b: ['faithful-wanderer'] })
    const health = state.players.b.hero.health
    const { state: next, fails } = run(
      state,
      plan({
        kind: 'heroAbility',
        targets: [
          { player: 'b', slot: 'hero' },
          { player: 'b', slot: 0 }
        ]
      })
    )

    expect(fails).toEqual([])
    expect(next.players.b.hero.health).toBe(health - 7)
    expect(next.players.b.allies[0]!.health).toBe(9 - 7)

    const twice = run(
      match('ilyra-starweaver', { b: ['faithful-wanderer'] }),
      plan({
        kind: 'heroAbility',
        targets: [
          { player: 'b', slot: 0 },
          { player: 'b', slot: 0 }
        ]
      })
    )

    expect(twice.fails).toEqual(['invalidTarget'])
    expect(twice.state.players.a.energy).toBe(10)
  })

  it("Caelus's Tribute takes 1 Chronos capacity from the rival and gives it to him", () => {
    const idle = run(match('caelus-the-usurper')).state
    const { state: next, fails } = run(match('caelus-the-usurper'), plan(ability()))

    expect(fails).toEqual([])
    expect(next.players.a.chronosCapacity).toBe(idle.players.a.chronosCapacity + 1)
    expect(next.players.b.chronosCapacity).toBe(idle.players.b.chronosCapacity - 1)
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

  it("Vex's allies gain stealth and +2 attack until the end of the next phase", () => {
    const state = match('vex-nightwire', { a: ['spark-of-dusk'] })
    const first = run(state, plan(ability())).state
    const unit = () => first.players.a.allies[0]!

    expect(unit().keywords).toContain('stealth')
    expect(unit().veil).toMatchObject({ attack: 2 })

    // Used in phase 1, it lasts all of phase 2 and ends when phase 3 starts.
    expect(first.phase).toBe(2)

    const second = run(first).state

    expect(second.players.a.allies[0]!.keywords).not.toContain('stealth')
    expect(second.players.a.allies[0]!.veil).toBeUndefined()
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

  it('Malachar poisons every enemy ally, and his allies cost 1 Chronos less until the end of the next phase', () => {
    const state = match('malachar-the-unmade', { b: ['spark-of-dusk', 'faithful-wanderer'] })
    const first = run(state, plan(ability())).state

    expect(first.players.b.allies.filter(Boolean).every((unit) => (unit!.poison ?? 0) > 0)).toBe(true)

    const ally = card(first, 'faithful-wanderer')

    first.players.a.hand.push(ally)
    first.players.a.chronos = 2

    const second = run(first, plan({ kind: 'play', cardUid: ally.uid, slot: 0 }))

    expect(second.fails).toEqual([])
    expect(second.state.players.a.allies[0]?.cardId).toBe('faithful-wanderer')
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
