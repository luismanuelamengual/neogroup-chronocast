/**
 * Gold of each result of a public PvP match (docs/PLAN.md, section 10.3).
 * Private matches pay half, with prize at most 3 times a day against the same
 * rival. The PvP module pays them (pvp/utils/rewards.ts); `yarn economy` uses them to tell
 * how long things take.
 */
export const GOLD_REWARDS = {
  win: 40,
  /** Extra for a win, up to this, when the rival had a higher rating. */
  winBonusMax: 20,
  draw: 15,
  loss: 5,
  abandon: 0,
  firstWinOfDay: 100,
  privateFactor: 0.5,
  privatePrizesPerRival: 3
}
