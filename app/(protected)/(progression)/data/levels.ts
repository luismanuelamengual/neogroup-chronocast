import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

/**
 * Levels and experience (docs/PLAN.md, section 10.4). Every battle the server
 * verifies pays XP; going from level L to L + 1 takes `XP_PER_LEVEL × L` XP
 * (100 to reach level 2, 200 more for level 3...), so reaching level N takes
 * 50 × N × (N − 1) XP in all: 1,000 for level 5, 4,500 for 10, 19,000 for
 * 20, 122,500 for 50 and 495,000 for 100.
 */
export const XP_PER_LEVEL = 100

/** Gold paid for each level gained. */
export const LEVEL_UP_GOLD = 1000

/** XP of each result of a public PvP match; private ones pay half (with the same daily cap as their gold). */
export const PVP_XP = {
  win: 100,
  draw: 50,
  loss: 30,
  abandon: 0
}

/** XP of a quick match against the CPU: half of a public match, only for the matches that pay gold. */
export const QUICK_MATCH_XP = {
  win: 50,
  draw: 25,
  loss: 15
}

/** XP of the first win of each campaign battle (the boss pays double); winning it again pays nothing. */
export const CAMPAIGN_XP = {
  win: 100,
  boss: 200
}

/**
 * The level that opens buying single cards (and heroes) of each rarity in the
 * shop (docs/PLAN.md, section 11.2). Packs can bring any rarity at any level.
 */
export const RARITY_LEVELS: Record<Rarity, number> = {
  common: 1,
  uncommon: 5,
  rare: 10,
  epic: 20,
  legendary: 40,
  exotic: 70,
  mythic: 100
}
