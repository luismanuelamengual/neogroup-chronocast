import { MatchResult } from '@/app/(protected)/(engine)/models/MatchState'
import { opponentOf, PLAYER_IDS, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { applyRating, MatchScore, ratingDelta } from '@/app/(protected)/(engine)/utils/rating'
import { PVP_XP } from '@/app/(protected)/(progression)/data/levels'
import { MatchVisibility, PlayerReward } from '@/app/(protected)/(pvp)/models/MatchView'
import { GOLD_REWARDS } from '@/app/(protected)/(shop)/data/gold'

export interface RewardInput {
  visibility: MatchVisibility
  result: MatchResult
  ratings: Record<PlayerId, number>
  /** Each player has not won a public match yet today. */
  firstWinToday: Record<PlayerId, boolean>
  /** Private matches: these two already got gold 3 times today against each other. */
  privateCapReached?: boolean
}

/** The win bonus: up to 20 when the rival had a higher rating (the whole 20 at 400 points or more). */
export function winBonus(rating: number, rivalRating: number): number {
  return Math.round(GOLD_REWARDS.winBonusMax * Math.min(1, Math.max(0, (rivalRating - rating) / 400)))
}

/**
 * What a finished match pays each player (docs/PLAN.md, section 10): public
 * matches move the rating (Elo, K = 30) and pay gold by result, with +100 for
 * the first win of the day; the one who surrenders or abandons gets nothing.
 * Private matches don't move the rating and pay half (without the daily bonus),
 * and nothing after 3 against the same rival in a day. XP follows the same
 * rules (PVP_XP); the level it gives is applied when the match is saved.
 */
export function matchRewards({
  visibility,
  result,
  ratings,
  firstWinToday,
  privateCapReached = false
}: RewardInput): Record<PlayerId, PlayerReward> {
  const quit = result.reason === 'surrender' || result.reason === 'abandon'
  const rewards = {} as Record<PlayerId, PlayerReward>

  for (const player of PLAYER_IDS) {
    const rival = opponentOf(player)
    const score: MatchScore = result.winner == null ? 0.5 : result.winner === player ? 1 : 0
    const won = score === 1
    let gold =
      score === 0.5
        ? quit
          ? GOLD_REWARDS.abandon
          : GOLD_REWARDS.draw
        : won
          ? GOLD_REWARDS.win + winBonus(ratings[player], ratings[rival])
          : quit
            ? GOLD_REWARDS.abandon
            : GOLD_REWARDS.loss
    let xp =
      score === 0.5 ? (quit ? PVP_XP.abandon : PVP_XP.draw) : won ? PVP_XP.win : quit ? PVP_XP.abandon : PVP_XP.loss
    let delta = 0
    let firstWin = false

    if (visibility === 'public') {
      delta = result.winner == null && quit ? 0 : ratingDelta(ratings[player], ratings[rival], score)
      firstWin = won && firstWinToday[player]
      gold += firstWin ? GOLD_REWARDS.firstWinOfDay : 0
    } else {
      gold = privateCapReached ? 0 : Math.round(gold * GOLD_REWARDS.privateFactor)
      xp = privateCapReached ? 0 : Math.round(xp * GOLD_REWARDS.privateFactor)
    }

    rewards[player] = {
      ratingDelta: delta,
      rating: applyRating(ratings[player], delta),
      gold,
      firstWin,
      xp,
      level: null
    }
  }

  return rewards
}

/** The start of the UTC day of a moment (the "day" of the first win and of the private cap). */
export function dayStart(now: number): number {
  return now - (now % 86_400_000)
}
