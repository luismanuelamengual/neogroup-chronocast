import { finishBattle } from '@/app/(protected)/(campaign)/services/campaigns'
import { withAuth } from '@/app/utils/api-server'

/**
 * POST /api/finishCampaignBattle — `{ ticket, record: { mulligan, timelines } }` → the server replays the
 * battle and, if the player won it, pays the rewards of the first win.
 */
export const POST = withAuth(async (request, _context, userId) => {
  const { ticket, record } = (await request.json()) as { ticket: string; record: unknown }

  return finishBattle(userId, ticket, record)
})
