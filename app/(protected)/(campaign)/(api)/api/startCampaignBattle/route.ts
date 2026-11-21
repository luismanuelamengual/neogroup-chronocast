import { startBattle } from '@/app/(protected)/(campaign)/services/campaigns'
import { playableActiveDeckId } from '@/app/(protected)/(collection)/services/decks'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/startCampaignBattle — `{ heroId, stage }`, with the active deck → the seed of the battle and its signed ticket. */
export const POST = withAuth(async (request, _context, userId) => {
  const { heroId, stage } = (await request.json()) as { heroId: string; stage: number }

  return startBattle(userId, String(heroId), Number(stage), await playableActiveDeckId(userId))
})
