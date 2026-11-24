import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import type { PlayerReward } from '@/app/(protected)/(pvp)/models/MatchView'

/** A quick match dealt by the server: the seed and both decks to create it, and its id to claim the gold. */
export interface QuickMatchTicket {
  matchId: number
  seed: number
  /** The player's active deck as it was when the match started. */
  deck: DeckList
  /** The computer's random hero and deck. */
  rival: DeckList
}

/** What a finished quick match paid (no Prestige: `ratingDelta` is always 0). */
export interface QuickMatchReward extends PlayerReward {
  /** The quick matches with gold of the day were already used up (`gold` is 0). */
  capped: boolean
}
