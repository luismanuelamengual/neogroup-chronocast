import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { unlockRarity } from '@/app/(protected)/(shop)/services/shop'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/unlockRarity — unlocks buying single cards of the next rarity: `{ rarity }`. */
export const POST = withAuth(async (request, _context, userId) => {
  const { rarity } = (await request.json()) as { rarity: Rarity }

  return unlockRarity(userId, rarity)
})
