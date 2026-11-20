import { MIN_RATING, RATING_K } from '@/app/(protected)/(engine)/data/rules'

/** Result of a match for a player: 1 win, 0.5 draw, 0 loss. */
export type MatchScore = 0 | 0.5 | 1

/**
 * How much the rating (Prestige) of a player moves after a public match
 * (docs/PLAN.md, section 10.2): classic Elo with K = 30, so it never moves
 * more than 30. A win always adds at least 1 and a loss takes at least 1.
 */
export function ratingDelta(rating: number, opponentRating: number, score: MatchScore): number {
  const expected = 1 / (1 + Math.pow(10, (opponentRating - rating) / 400))
  const delta = Math.round(RATING_K * (score - expected))

  if (score === 1) {
    return Math.max(1, delta)
  }

  if (score === 0) {
    return Math.min(-1, delta)
  }

  return delta
}

/** The new rating, never below the floor. */
export function applyRating(rating: number, delta: number): number {
  return Math.max(MIN_RATING, rating + delta)
}
