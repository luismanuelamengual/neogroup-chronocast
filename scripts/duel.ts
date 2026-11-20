/* eslint-disable no-console */
/**
 * Balance: plays many matches computer against computer (level 3) between the heroes'
 * basic decks (data/heroDecks.ts) and prints the win rate of each hero against
 * each other one, the draws and how many phases a match lasts (the goal: 6 to 12).
 *
 * Usage: yarn duel                 (every pair of starter heroes, 100 matches each)
 *        yarn duel all [matches]   (every hero against every other one, 16 matches per pair)
 *        yarn duel <heroA> <heroB> [matches]
 */
import { basicDeck } from '@/app/(protected)/(cards)/data/heroDecks'
import { STARTER_HERO_IDS } from '@/app/(protected)/(cards)/data/starters'
import { HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import { chooseTimeline } from '@/app/(protected)/(engine)/ai/chooseTimeline'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'

/** The computer level both sides play at (3: it simulates its candidate timelines, like a careful player). */
const LEVEL = 3

export function playMatch(heroA: string, heroB: string, seed: number): MatchState {
  let { state } = createMatch({ seed, decks: { a: basicDeck(heroA), b: basicDeck(heroB) } })

  while (state.status === 'planning') {
    state = resolvePhase(state, { a: chooseTimeline(state, 'a', LEVEL), b: chooseTimeline(state, 'b', LEVEL) }).state
  }

  return state
}

function duel(heroA: string, heroB: string, matches: number, quiet = false): number {
  let winsA = 0
  let winsB = 0
  let draws = 0
  let phases = 0

  for (let i = 0; i < matches; i++) {
    // Each hero plays half of the matches as side "a".
    const swap = i % 2 === 1
    const state = swap ? playMatch(heroB, heroA, i + 1) : playMatch(heroA, heroB, i + 1)
    const winner = state.result?.winner

    phases += state.phase

    if (winner == null) {
      draws++
    } else if ((winner === 'a') !== swap) {
      winsA++
    } else {
      winsB++
    }
  }

  const percent = (count: number) => `${Math.round((count / matches) * 100)}%`.padStart(4)

  if (quiet) {
    return winsA + draws / 2
  }

  console.log(
    `${heroA.padEnd(18)} vs ${heroB.padEnd(18)} ${percent(winsA)} – ${percent(winsB)}  draws ${percent(draws)}  ` +
      `phases ${(phases / matches).toFixed(1)}`
  )

  return winsA + draws / 2
}

/** Every hero against every other one: its share of the points (a draw is half a win). */
function tournament(matches: number): void {
  const ids = HEROES.map((hero) => hero.id)
  const points = new Map(ids.map((id) => [id, 0]))

  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      const score = duel(ids[i], ids[j], matches, true)

      points.set(ids[i], points.get(ids[i])! + score)
      points.set(ids[j], points.get(ids[j])! + matches - score)
    }
  }

  const games = matches * (ids.length - 1)

  for (const [id, score] of [...points].sort((a, b) => b[1] - a[1])) {
    console.log(`${id.padEnd(22)} ${Math.round((score / games) * 100)}%`)
  }
}

if (require.main === module) {
  const [heroA, heroB, count] = process.argv.slice(2)
  const matches = Number(count) || 100

  if (heroA === 'all') {
    tournament(Number(heroB) || 16)
  } else if (heroA && heroB) {
    duel(heroA, heroB, matches)
  } else {
    for (let i = 0; i < STARTER_HERO_IDS.length; i++) {
      for (let j = i + 1; j < STARTER_HERO_IDS.length; j++) {
        duel(STARTER_HERO_IDS[i], STARTER_HERO_IDS[j], matches)
      }
    }
  }
}
