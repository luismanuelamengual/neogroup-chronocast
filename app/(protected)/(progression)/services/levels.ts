import { DB } from '@neogroup/neorm'
import { LevelGain } from '@/app/(protected)/(progression)/models/LevelGain'
import { applyXp } from '@/app/(protected)/(progression)/utils/levels'

/**
 * Gives XP to a player, inside the caller's transaction: updates its XP and
 * level and pays LEVEL_UP_GOLD for each level gained.
 */
export async function grantXp(userId: number, xp: number): Promise<LevelGain> {
  const user = await DB.table('users').where('id', userId).first()
  const current = Number(user?.xp ?? 0)
  const gain = applyXp(current, xp)

  if (user && (gain.xp > 0 || gain.gold > 0)) {
    await DB.table('users')
      .where('id', userId)
      .update({ xp: current + gain.xp, level: gain.level, gold: Number(user.gold ?? 0) + gain.gold })
  }

  return gain
}
