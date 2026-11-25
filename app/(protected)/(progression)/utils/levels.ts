import { RARITIES, Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { LEVEL_UP_GOLD, RARITY_LEVELS, XP_PER_LEVEL } from '@/app/(protected)/(progression)/data/levels'
import { LevelGain, LevelProgress } from '@/app/(protected)/(progression)/models/LevelGain'

/** XP to go from a level to the next one. */
export function xpForNext(level: number): number {
  return XP_PER_LEVEL * level
}

/** Total XP to reach a level (level 1: 0). */
export function totalXpForLevel(level: number): number {
  return (XP_PER_LEVEL / 2) * level * (level - 1)
}

/** The level of a total of XP. */
export function levelForXp(xp: number): number {
  let level = 1

  while (totalXpForLevel(level + 1) <= xp) {
    level++
  }

  return level
}

export function levelProgress(xp: number): LevelProgress {
  const total = Math.max(0, Math.floor(xp))
  const level = levelForXp(total)

  return { level, xp: total, xpInLevel: total - totalXpForLevel(level), xpForNext: xpForNext(level) }
}

/** What earning `earned` XP on top of `current` does: the new level and the gold of the levels gained. */
export function applyXp(current: number, earned: number): LevelGain {
  const before = levelForXp(Math.max(0, current))
  const after = levelProgress(Math.max(0, current) + Math.max(0, earned))
  const levelsGained = after.level - before

  return {
    xp: Math.max(0, earned),
    level: after.level,
    levelsGained,
    gold: levelsGained * LEVEL_UP_GOLD,
    xpInLevel: after.xpInLevel,
    xpForNext: after.xpForNext
  }
}

/** The level that opens a rarity in the shop. */
export function rarityLevel(rarity: Rarity): number {
  return RARITY_LEVELS[rarity]
}

/** The rarities a player of this level can buy single cards of, in order. */
export function unlockedRarities(level: number): Rarity[] {
  return RARITIES.filter((rarity) => RARITY_LEVELS[rarity] <= level)
}
