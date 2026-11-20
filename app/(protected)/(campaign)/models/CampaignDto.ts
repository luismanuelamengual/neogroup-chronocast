import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'

/** A campaign as the player sees it: whether it can play it and how far it got. */
export interface CampaignSummary {
  heroId: string
  /** The player owns the hero (the campaign is played with a deck of that hero). */
  owned: boolean
  /** Battles won (0 to 10). */
  stage: number
  completed: boolean
  rewardCardId: string
}

/** What starting a campaign battle gives: the seed of the match and the ticket to claim the win. */
export interface BattleTicket {
  ticket: string
  heroId: string
  stage: number
  seed: number
  deck: DeckList
}

/** What winning a campaign battle paid (all zero / null when it was not the first win). */
export interface BattleReward {
  stage: number
  firstWin: boolean
  gold: number
  pack: { id: string; cards: string[] } | null
  /** The exclusive card, when the boss falls for the first time. */
  rewardCardId: string | null
  /** Battles won in the campaign after this one. */
  progress: number
}
