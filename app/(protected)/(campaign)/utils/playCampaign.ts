import '@/app/(protected)/(cards)/utils/catalog'
import { CampaignStage } from '@/app/(protected)/(campaign)/models/Campaign'
import { chooseTimeline } from '@/app/(protected)/(engine)/ai/chooseTimeline'
import { PHASE_LIMIT } from '@/app/(protected)/(engine)/data/rules'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { createMatch, mulligan } from '@/app/(protected)/(engine)/utils/createMatch'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'

/** The player's side in a campaign battle (the computer plays "b"). */
export const PLAYER = 'a'
export const CPU = 'b'

/** What the player did in a campaign battle: enough for the server to play it again. */
export interface BattleRecord {
  /** The cards sent back in the mulligan (by uid). */
  mulligan: number[]
  /** The player's timeline of each phase, in order. */
  timelines: Timeline[]
}

/** A campaign battle: the player's deck against the stage's, with the adverse situations of the stage. */
export function createCampaignMatch(stage: CampaignStage, deck: DeckList, seed: number): MatchState {
  return createMatch({
    seed,
    decks: { a: deck, b: stage.cpuDeck },
    setup: { a: stage.playerSetup, b: stage.cpuSetup }
  }).state
}

/**
 * Plays a campaign battle again from its record (docs/PLAN.md, section
 * 13.4): the same seed, the player's mulligan and timelines, and the computer
 * choosing its own with the same deterministic AI as in the browser. Returns
 * the final state, or null if the record doesn't reach the end of the match.
 */
export function replayCampaign(
  stage: CampaignStage,
  deck: DeckList,
  seed: number,
  record: BattleRecord
): MatchState | null {
  let state = mulligan(createCampaignMatch(stage, deck, seed), PLAYER, record.mulligan)

  for (const timeline of record.timelines.slice(0, PHASE_LIMIT + 1)) {
    if (state.status !== 'planning') {
      break
    }

    state = resolvePhase(state, { a: timeline, b: chooseTimeline(state, CPU, stage.aiLevel) }).state
  }

  return state.status === 'finished' ? state : null
}
