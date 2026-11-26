import { describe, expect, it } from 'vitest'
import { HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { sideOf } from '@/app/(protected)/(engine)/models/Side'
import { canUseCard } from '@/app/(protected)/(engine)/utils/deckRules'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { give, place, testMatch, timeline } from '@/tests/support/testCards'

const DAWN = 'dawn-sigil'
const ECLIPSE = 'eclipse-sigil'

function run(state: MatchState, a: Timeline = emptyTimeline(), b: Timeline = emptyTimeline()) {
  return resolvePhase(state, { a, b })
}

function richMatch(): MatchState {
  const state = testMatch()

  state.players.a.chronos = 10
  state.players.b.chronos = 10

  return state
}

describe('the Dawn and Eclipse Sigils', () => {
  it('the Dawn Sigil heals every ally of its owner by 4 at the start of each phase', () => {
    const state = richMatch()

    place(state, 'a', 'test-soldier', 0).health = 10
    place(state, 'b', 'test-soldier', 0).health = 10
    const dawn = give(state, 'a', DAWN)
    // Resolving a phase also starts the next one: the Sigil acts once.
    const next = run(state, timeline({ kind: 'play', cardUid: dawn.uid })).state

    expect(next.players.a.allies[0]?.health).toBe(14)
    expect(next.players.b.allies[0]?.health).toBe(10)
    expect(next.players.a.artifacts.map((card) => card.cardId)).toEqual([DAWN])
  })

  it('the Eclipse Sigil deals 2 to every ally of both sides at the start of each phase', () => {
    const state = richMatch()

    place(state, 'a', 'test-soldier', 0)
    place(state, 'b', 'test-soldier', 0)
    const eclipse = give(state, 'a', ECLIPSE)
    const next = run(state, timeline({ kind: 'play', cardUid: eclipse.uid })).state

    expect(next.players.a.allies[0]?.health).toBe(18)
    expect(next.players.b.allies[0]?.health).toBe(18)
    expect(next.players.a.artifacts.map((card) => card.cardId)).toEqual([ECLIPSE])
  })

  it('the Eclipse Sigil is destroyed when there are no allies at the start of a phase', () => {
    const state = richMatch()
    const eclipse = give(state, 'a', ECLIPSE)
    const next = run(state, timeline({ kind: 'play', cardUid: eclipse.uid })).state

    expect(next.players.a.artifacts).toHaveLength(0)
    expect(next.players.a.discard.some((card) => card.uid === eclipse.uid)).toBe(true)
  })

  it('the ability of one Sigil, for 0 Chronos, destroys every copy of the other, on both sides', () => {
    const state = richMatch()

    place(state, 'a', 'test-soldier', 0)
    const dawn = give(state, 'a', DAWN)
    const eclipse = give(state, 'b', ECLIPSE)
    const current = run(
      state,
      timeline({ kind: 'play', cardUid: dawn.uid }),
      timeline({ kind: 'play', cardUid: eclipse.uid })
    ).state

    expect(current.players.a.artifacts.map((card) => card.cardId)).toEqual([DAWN])
    expect(current.players.b.artifacts.map((card) => card.cardId)).toEqual([ECLIPSE])

    current.players.b.chronos = 0
    const { state: next, events } = run(
      current,
      emptyTimeline(),
      timeline({ kind: 'artifactAbility', artifactUid: eclipse.uid })
    )

    expect(events.filter((event) => event.type === 'fail')).toEqual([])
    expect(next.players.a.artifacts).toHaveLength(0)
    expect(next.players.a.discard.some((card) => card.uid === dawn.uid)).toBe(true)
    expect(next.players.b.artifacts.map((card) => card.cardId)).toEqual([ECLIPSE])
    // The next phase already started: the ability can be used again.
    expect(next.players.b.artifacts[0].abilityUsedThisPhase).toBe(false)
  })

  it('the ability fails when there is no rival Sigil in play', () => {
    const state = richMatch()

    place(state, 'a', 'test-soldier', 0)
    const dawn = give(state, 'a', DAWN)
    const current = run(state, timeline({ kind: 'play', cardUid: dawn.uid })).state
    const { events } = run(
      current,
      timeline({ kind: 'artifactAbility', artifactUid: dawn.uid }, { kind: 'artifactAbility', artifactUid: dawn.uid })
    )
    const reasons = events.flatMap((event) => (event.type === 'fail' ? [event.reason] : []))

    expect(reasons[0]).toBe('nothingToDestroy')
  })

  it('an artifact ability works once per phase', () => {
    const state = richMatch()

    place(state, 'a', 'test-soldier', 0)
    const dawn = give(state, 'a', DAWN)
    const eclipse = give(state, 'b', ECLIPSE)
    const current = run(
      state,
      timeline({ kind: 'play', cardUid: dawn.uid }),
      timeline({ kind: 'play', cardUid: eclipse.uid })
    ).state
    const { events } = run(
      current,
      timeline({ kind: 'artifactAbility', artifactUid: dawn.uid }, { kind: 'artifactAbility', artifactUid: dawn.uid })
    )
    const reasons = events.flatMap((event) => (event.type === 'fail' ? [event.reason] : []))

    expect(reasons).toEqual(['abilityUsed'])
  })
})

describe('the Dawn and Eclipse sides', () => {
  it('every hero has a side: one of each side in every faction', () => {
    const heroes = HEROES.filter((hero) => !hero.boss)
    const dawn = heroes.filter((hero) => sideOf(hero) === 'dawn')
    const eclipse = heroes.filter((hero) => sideOf(hero) === 'eclipse')

    expect(dawn).toHaveLength(6)
    expect(eclipse).toHaveLength(6)
    expect(new Set(dawn.map((hero) => hero.faction)).size).toBe(6)
    expect(new Set(eclipse.map((hero) => hero.faction)).size).toBe(6)
    expect(sideOf(getCard('legate-varro'))).toBe('dawn')
    expect(sideOf(getCard('nyx-hollowsong'))).toBe('dawn')
  })

  it('each Sigil only goes in the decks of its side', () => {
    const dawnHero = getCard('legate-varro')
    const eclipseHero = getCard('malachar-the-unmade')

    expect(canUseCard(dawnHero, getCard(DAWN))).toBe(true)
    expect(canUseCard(dawnHero, getCard(ECLIPSE))).toBe(false)
    expect(canUseCard(eclipseHero, getCard(ECLIPSE))).toBe(true)
    expect(canUseCard(eclipseHero, getCard(DAWN))).toBe(false)
  })
})
