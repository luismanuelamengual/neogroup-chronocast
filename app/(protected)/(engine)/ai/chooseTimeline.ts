import { evaluate } from '@/app/(protected)/(engine)/ai/evaluate'
import { AI_LEVELS, AiLevel } from '@/app/(protected)/(engine)/ai/levels'
import { GREEDY, PlanStyle, planTimeline } from '@/app/(protected)/(engine)/ai/planTimeline'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { opponentOf, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { nextRandom } from '@/app/(protected)/(engine)/utils/random'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'

/** Every style a candidate timeline can be built with, the most promising first. */
export const STYLES: PlanStyle[] = (() => {
  const styles: PlanStyle[] = []

  for (const defense of [false, true]) {
    for (const attack of ['trade', 'face', 'none'] as const) {
      for (const cards of ['value', 'cheap', 'none'] as const) {
        for (const sacrifice of [true, false]) {
          styles.push({ sacrifice, cards, ability: true, attack, defense })
        }
      }
    }
  }

  // The greedy style first, then by how sensible the style usually is.
  const weight = (style: PlanStyle) =>
    (style.cards === 'none' ? 4 : style.cards === 'cheap' ? 1 : 0) +
    (style.attack === 'none' ? 3 : style.attack === 'face' ? 1 : 0) +
    (style.sacrifice ? 0 : 2) +
    (style.defense ? 1 : 0)

  return styles.sort((a, b) => weight(a) - weight(b))
})()

/**
 * What the rival might do, seen from its board only (the computer never
 * looks at the cards in the rival's hand): nothing, its allies trading, or all
 * of them going for the hero.
 */
const RESPONSES: (PlanStyle | null)[] = [
  null,
  { sacrifice: false, cards: 'none', ability: true, attack: 'trade', defense: false },
  { sacrifice: false, cards: 'none', ability: true, attack: 'face', defense: false }
]

/** A number in [0, 1) that only depends on the match, the phase and the side: the choice is deterministic. */
function chance(state: MatchState, player: PlayerId): number {
  return nextRandom((state.seed ^ (state.phase * 7919) ^ (player === 'a' ? 0x1234 : 0x5678)) | 0).value
}

/** The rival's face-down traps are hidden: the computer can't know about them. */
function visibleTo(state: MatchState, player: PlayerId): MatchState {
  const rival = opponentOf(player)

  return { ...state, players: { ...state.players, [rival]: { ...state.players[rival], traps: [] } } }
}

function responseTo(state: MatchState, rival: PlayerId, style: PlanStyle | null): Timeline {
  return style ? planTimeline(state, rival, style) : emptyTimeline()
}

/** How good a timeline is: the result against each likely response (the worst case weighs the most). */
function score(state: MatchState, player: PlayerId, timeline: Timeline, level: AiLevel): number {
  const rival = opponentOf(player)
  const results: number[] = []

  for (const response of RESPONSES.slice(0, level.responses)) {
    let next = resolvePhase(state, { [player]: timeline, [rival]: responseTo(state, rival, response) } as Record<
      PlayerId,
      Timeline
    >).state
    const first = evaluate(next, player)

    for (let depth = 1; depth < level.depth && next.status === 'planning'; depth++) {
      const plans = {
        [player]: planTimeline(next, player, GREEDY),
        [rival]: responseTo(next, rival, RESPONSES[1])
      } as Record<PlayerId, Timeline>

      next = resolvePhase(next, plans).state
    }

    // Further phases are guesses: they weigh as much as the one being planned.
    results.push(level.depth > 1 ? (first + evaluate(next, player)) / 2 : first)
  }

  const worst = Math.min(...results)
  const average = results.reduce((sum, value) => sum + value, 0) / results.length

  return worst * 0.6 + average * 0.4
}

/**
 * The computer player (docs/PLAN.md, section 13.3), by difficulty level
 * (ai/levels.ts). The low levels play the greedy timeline (sometimes a worse
 * one, on purpose). From level 3 on it builds one candidate per style,
 * simulates each against the likely responses of the rival (one or two phases
 * ahead) and keeps the best. Pure and deterministic: the same state and level
 * always give the same timeline, so the server can replay a campaign battle.
 */
export function chooseTimeline(state: MatchState, player: PlayerId, levelNumber: number): Timeline {
  const level = AI_LEVELS[Math.min(Math.max(levelNumber, 1), AI_LEVELS.length) - 1]
  const roll = chance(state, player)

  if (level.depth === 0) {
    const style: PlanStyle = { ...GREEDY, defense: level.defense }
    // Now and then, a careless phase: the cheap cards first, or every attack to the hero.
    const careless: PlanStyle = roll < level.noise / 2 ? { ...style, cards: 'cheap' } : { ...style, attack: 'face' }

    return planTimeline(state, player, roll < level.noise ? careless : style)
  }

  const visible = visibleTo(state, player)
  const seen = new Set<string>()
  const candidates: { timeline: Timeline; score: number }[] = []

  for (const style of STYLES.slice(0, level.candidates)) {
    const timeline = planTimeline(visible, player, { ...style, defense: style.defense || level.defense })
    const key = JSON.stringify(timeline)

    if (!seen.has(key)) {
      seen.add(key)
      candidates.push({ timeline, score: score(visible, player, timeline, level) })
    }
  }

  candidates.sort((a, b) => b.score - a.score)

  // A little randomness: sometimes the second best, when it is close.
  const second = candidates[1]

  if (second && roll < level.noise && candidates[0].score - second.score < 15) {
    return second.timeline
  }

  return candidates[0].timeline
}
