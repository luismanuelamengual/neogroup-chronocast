import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

/** Battles in a campaign; the last one is the boss. */
export const STAGES_PER_CAMPAIGN = 10

/**
 * The difficulty curve of every campaign (docs/PLAN.md, section 13.2), by
 * battle: the computer's level, the rarest card its default deck can bring,
 * and the rewards of the first win.
 */
export const STAGE_RULES: { aiLevel: number; maxRarity: Rarity; gold: number; pack: string | null }[] = [
  { aiLevel: 1, maxRarity: 'common', gold: 75, pack: null },
  { aiLevel: 1, maxRarity: 'common', gold: 90, pack: null },
  { aiLevel: 2, maxRarity: 'uncommon', gold: 120, pack: null },
  { aiLevel: 2, maxRarity: 'uncommon', gold: 150, pack: null },
  { aiLevel: 3, maxRarity: 'rare', gold: 180, pack: 'chronicler' },
  { aiLevel: 3, maxRarity: 'rare', gold: 225, pack: null },
  { aiLevel: 4, maxRarity: 'epic', gold: 270, pack: null },
  { aiLevel: 4, maxRarity: 'epic', gold: 330, pack: null },
  { aiLevel: 5, maxRarity: 'legendary', gold: 390, pack: null },
  { aiLevel: 6, maxRarity: 'legendary', gold: 450, pack: 'guardian' }
]
