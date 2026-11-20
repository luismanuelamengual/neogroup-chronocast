import { LeagueId } from '@/app/(protected)/(pvp)/data/leagues'

export interface RankingEntry {
  position: number
  userId: number
  name: string
  rating: number
  league: LeagueId
  matches: number
}

export interface Ranking {
  top: RankingEntry[]
  /** The player's own place (null: no public match played yet). */
  me: RankingEntry | null
}
