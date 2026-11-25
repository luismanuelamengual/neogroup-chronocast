/** The XP a battle paid and where it left the player (shown at the end of the battle). */
export interface LevelGain {
  /** XP earned in this battle. */
  xp: number
  /** The level after it. */
  level: number
  /** Levels gained with it (each one paid LEVEL_UP_GOLD). */
  levelsGained: number
  /** Gold of the levels gained. */
  gold: number
  /** XP inside the current level, and what the next level needs. */
  xpInLevel: number
  xpForNext: number
}

/** Where a player stands: level and progress to the next one. */
export interface LevelProgress {
  level: number
  xp: number
  xpInLevel: number
  xpForNext: number
}
