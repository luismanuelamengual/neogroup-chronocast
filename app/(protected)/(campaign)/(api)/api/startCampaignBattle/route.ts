import { startBattle } from '@/app/(protected)/(campaign)/services/campaigns'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/startCampaignBattle — `{ heroId, stage, deckId }` → the seed of the battle and its signed ticket. */
export const POST = withAuth(async (request, _context, userId) => {
  const { heroId, stage, deckId } = (await request.json()) as { heroId: string; stage: number; deckId: number }

  return startBattle(userId, String(heroId), Number(stage), Number(deckId))
})
