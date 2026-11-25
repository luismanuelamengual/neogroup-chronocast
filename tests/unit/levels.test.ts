import { describe, expect, it } from 'vitest'
import { RARITIES } from '@/app/(protected)/(engine)/models/Rarity'
import { LEVEL_UP_GOLD, RARITY_LEVELS } from '@/app/(protected)/(progression)/data/levels'
import {
  applyXp,
  levelForXp,
  levelProgress,
  totalXpForLevel,
  unlockedRarities,
  xpForNext
} from '@/app/(protected)/(progression)/utils/levels'

describe('levels and XP', () => {
  it('each level takes 100 XP more than the previous one', () => {
    expect([1, 2, 3, 10].map(xpForNext)).toEqual([100, 200, 300, 1000])
    expect([1, 2, 5, 10, 20, 50, 100].map(totalXpForLevel)).toEqual([0, 100, 1000, 4500, 19000, 122500, 495000])

    for (let level = 1; level < 120; level++) {
      expect(totalXpForLevel(level + 1) - totalXpForLevel(level)).toBe(xpForNext(level))
    }
  })

  it('finds the level of a total of XP', () => {
    expect(levelForXp(0)).toBe(1)
    expect(levelForXp(99)).toBe(1)
    expect(levelForXp(100)).toBe(2)
    expect(levelForXp(299)).toBe(2)
    expect(levelForXp(300)).toBe(3)
    expect(levelForXp(495000)).toBe(100)
    expect(levelProgress(350)).toEqual({ level: 3, xp: 350, xpInLevel: 50, xpForNext: 300 })
  })

  it('pays 1,000 of gold for each level gained', () => {
    expect(applyXp(0, 50)).toEqual({ xp: 50, level: 1, levelsGained: 0, gold: 0, xpInLevel: 50, xpForNext: 100 })
    expect(applyXp(90, 30)).toMatchObject({ level: 2, levelsGained: 1, gold: LEVEL_UP_GOLD, xpInLevel: 20 })
    // From 0 to 300: levels 2 and 3 at once.
    expect(applyXp(0, 300)).toMatchObject({ level: 3, levelsGained: 2, gold: 2 * LEVEL_UP_GOLD })
    expect(applyXp(500, 0)).toMatchObject({ xp: 0, levelsGained: 0, gold: 0 })
  })

  it('opens the rarities of the shop at levels 1, 5, 10, 20, 40, 70 and 100', () => {
    expect(RARITIES.map((rarity) => RARITY_LEVELS[rarity])).toEqual([1, 5, 10, 20, 40, 70, 100])
    expect(unlockedRarities(1)).toEqual(['common'])
    expect(unlockedRarities(4)).toEqual(['common'])
    expect(unlockedRarities(5)).toEqual(['common', 'uncommon'])
    expect(unlockedRarities(10)).toEqual(['common', 'uncommon', 'rare'])
    expect(unlockedRarities(39)).toEqual(['common', 'uncommon', 'rare', 'epic'])
    expect(unlockedRarities(40)).toEqual(['common', 'uncommon', 'rare', 'epic', 'legendary'])
    expect(unlockedRarities(100)).toEqual([...RARITIES])
  })
})
