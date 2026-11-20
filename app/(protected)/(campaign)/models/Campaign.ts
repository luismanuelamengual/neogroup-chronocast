import { SideSetup } from '@/app/(protected)/(engine)/utils/createMatch'

/** One battle of a campaign, as its file writes it. */
export interface StageDefinition {
  /** The computer's hero. */
  rival: string
  /** The computer's deck: [cardId, copies] (39 cards, all usable by the rival). Default: built from the stage's rules. */
  deck?: [string, number][]
  /** How the computer starts (its adverse situation for the player). */
  cpuSetup?: SideSetup
  /** How the player starts. */
  playerSetup?: SideSetup
}

/** A battle with everything it needs: the stage's rules (data/difficulty.ts) applied to its definition. */
export interface CampaignStage {
  /** From 1 to 10. */
  number: number
  rival: string
  /** The computer's deck: the rival hero and one entry per copy. */
  cpuDeck: { heroId: string; cards: string[] }
  aiLevel: number
  cpuSetup: SideSetup
  playerSetup: SideSetup
  /** Gold for the first win. */
  gold: number
  /** A pack opened for free on the first win. */
  pack: string | null
  boss: boolean
}

/** A hero's campaign (docs/PLAN.md, section 13): 10 battles, the last one a boss, and an exclusive card. */
export interface Campaign {
  heroId: string
  /** The card that only completing the campaign gives. */
  rewardCardId: string
  stages: CampaignStage[]
}
