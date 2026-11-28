/**
 * Gold of each result of a public PvP match (docs/PLAN.md, section 10.3).
 * Private matches pay half, with prize at most 3 times a day against the same
 * rival. The PvP module pays them (pvp/utils/rewards.ts); `yarn economy` uses them to tell
 * how long things take.
 */
/** Gold of a brand new account (sign up, first Google sign in and `yarn db:reset-user`). */
export const STARTING_GOLD = 1000

export const GOLD_REWARDS = {
  win: 60,
  /** Extra for a win, up to this, when the rival had a higher rating. */
  winBonusMax: 30,
  draw: 23,
  loss: 8,
  abandon: 0,
  firstWinOfDay: 100,
  privateFactor: 0.5,
  privatePrizesPerRival: 3
}

/**
 * Gold of a quick match against the CPU (/quick-match): about half of a
 * public match, without the win bonus, the first win of the day or Prestige.
 * The server pays it only after replaying the match (battle/services/quickMatches.ts),
 * and only for the first `prizesPerDay` quick matches of the (UTC) day.
 */
export const QUICK_MATCH_GOLD = {
  win: 30,
  draw: 12,
  loss: 5,
  prizesPerDay: 10
}
