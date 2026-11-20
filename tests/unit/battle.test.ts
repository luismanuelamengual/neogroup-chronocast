import { describe, expect, it } from 'vitest'
import { describeEvent } from '@/app/(protected)/(battle)/utils/describeEvent'
import { slotEffects } from '@/app/(protected)/(battle)/utils/effects'
import { projectPlan, usedCards } from '@/app/(protected)/(battle)/utils/projection'
import { attackRefs, moveRefs, refsFor, summonRefs } from '@/app/(protected)/(battle)/utils/targets'
import { emptyTimeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { projectTimeline } from '@/app/(protected)/(engine)/utils/projectTimeline'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { createTranslator } from '@/app/i18n/translate'
import { give, place, testMatch, timeline } from '@/tests/support/testCards'

const t = createTranslator('en')

describe('resolution frames', () => {
  it('snapshots each speed bracket, in order, and the end of the phase', () => {
    const state = testMatch()

    state.players.a.chronos = 5

    const quick = place(state, 'a', 'test-quick', 0)
    const soldier = place(state, 'b', 'test-soldier', 0)
    const { frames, events } = resolvePhase(
      state,
      {
        a: timeline({ kind: 'allyAttack', allyUid: quick.uid, target: { player: 'b', slot: 'hero' } }),
        b: timeline({ kind: 'allyAttack', allyUid: soldier.uid, target: { player: 'a', slot: 'hero' } })
      },
      { frames: true }
    )

    expect(frames.map((frame) => [frame.step, frame.speed])).toEqual([
      [0, 'fast'],
      [0, 'normal'],
      [-1, null]
    ])
    expect(frames[0].state.players.b.hero.health).toBe(90)
    expect(frames[0].state.players.a.hero.health).toBe(100)
    expect(frames[1].state.players.a.hero.health).toBe(90)
    expect(frames.flatMap((frame) => frame.events)).toEqual(events)
  })

  it('are only built when asked for', () => {
    expect(resolvePhase(testMatch(), { a: emptyTimeline(), b: emptyTimeline() }).frames).toEqual([])
  })
})

describe('the projection', () => {
  it('tells the Chronos left after each step and what would fail', () => {
    const state = testMatch()
    const fodder = state.players.a.hand[0]
    const soldier = give(state, 'a', 'test-soldier')
    const other = give(state, 'a', 'test-soldier')
    const plan = [
      { kind: 'sacrifice', cardUid: fodder.uid },
      { kind: 'play', cardUid: soldier.uid, slot: 0 },
      { kind: 'play', cardUid: other.uid, slot: 1 }
    ] as const
    const { steps, board } = projectPlan(state, 'a', [...plan])

    expect(steps.map((step) => step.chronos)).toEqual([1, 0, 0, 0, 0])
    expect(steps.map((step) => step.failure)).toEqual([null, null, 'notEnoughChronos', null, null])
    expect(board.players.a.allies[0]?.cardId).toBe('test-soldier')
    expect(usedCards([...plan])).toEqual(new Set([fodder.uid, soldier.uid, other.uid]))
  })

  it("does not see the rival's face-down traps", () => {
    const state = testMatch()
    const soldier = place(state, 'a', 'test-soldier', 0)

    state.players.b.traps.push({ uid: state.nextUid++, cardId: 'test-snare' })

    const attack = timeline({ kind: 'allyAttack', allyUid: soldier.uid, target: { player: 'b', slot: 'hero' } })

    expect(projectTimeline(state, 'a', attack).failures).toEqual([])
    expect(resolvePhase(state, { a: attack, b: emptyTimeline() }).events.some((e) => e.type === 'fail')).toBe(true)
  })
})

describe('targets', () => {
  it('offers the slots each choice can use', () => {
    const state = testMatch()

    place(state, 'a', 'test-soldier', 0)
    place(state, 'a', 'test-soldier', 1)

    const agile = place(state, 'a', 'test-agile', 4)
    const runner = state.players.a.allies[0]!

    place(state, 'b', 'test-sneak', 2)
    place(state, 'b', 'test-soldier', 3)

    expect(summonRefs(state, 'a').map((ref) => ref.slot)).toEqual([2, 3])
    expect(attackRefs(state, 'a').map((ref) => ref.slot)).toEqual(['hero', 0, 1, 3, 4]) // the stealthy one is hidden
    expect(refsFor(state, 'a', 'enemyAlly').map((ref) => ref.slot)).toEqual([3])
    expect(refsFor(state, 'a', 'friendlyAlly').map((ref) => ref.slot)).toEqual([0, 1, 4])
    expect(moveRefs(state, 'a', runner.uid).map((ref) => ref.slot)).toEqual([1, 2, 3])
    expect(moveRefs(state, 'a', agile.uid).map((ref) => ref.slot)).toEqual([0, 1, 2, 3])
  })
})

describe('the battle log and animations', () => {
  it('describes the events by the names of the cards', () => {
    const state = testMatch()

    place(state, 'b', 'test-soldier', 2)

    expect(describeEvent({ type: 'damage', target: { player: 'b', slot: 2 }, amount: 7, absorbed: 0 }, t, state)).toBe(
      'test-soldier takes 7 damage'
    )
    expect(describeEvent({ type: 'heroFell', player: 'a' }, t, state)).toBe('Test Hero falls')
    expect(describeEvent({ type: 'step', step: 1 }, t, state)).toBeNull()
  })

  it('turns events into floating numbers and moves on the slots', () => {
    const effects = slotEffects(
      [
        { type: 'attack', attacker: { player: 'a', slot: 0 }, target: { player: 'b', slot: 'hero' } },
        { type: 'damage', target: { player: 'b', slot: 'hero' }, amount: 6, absorbed: 4 }
      ],
      t
    )

    expect(effects.get('a:0')?.attacking).toBe(true)
    expect(effects.get('b:hero')?.floats.map((float) => float.text)).toEqual(['-4 🛡️', '-6'])
  })
})
