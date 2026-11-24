import '@/app/(protected)/(cards)/utils/catalog'
import { replayBattle } from '@/app/(protected)/(battle)/utils/replayBattle'
import { CampaignStage } from '@/app/(protected)/(campaign)/models/Campaign'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'

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
 * 13.4) with the stage's AI level. Returns the final state, or null if the
 * record doesn't reach the end of the match.
 */
export function replayCampaign(
  stage: CampaignStage,
  deck: DeckList,
  seed: number,
  record: BattleRecord
): MatchState | null {
  return replayBattle(createCampaignMatch(stage, deck, seed), record, stage.aiLevel)
}
