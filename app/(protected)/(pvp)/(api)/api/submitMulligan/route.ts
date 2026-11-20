import { submitMulligan } from '@/app/(protected)/(pvp)/services/matches'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/submitMulligan — `{ matchId, cardUids }`: the cards of the opening hand to replace. */
export const POST = withAuth(async (request, _context, userId) => {
  const { matchId, cardUids } = (await request.json()) as { matchId: number; cardUids: number[] }

  return submitMulligan(userId, Number(matchId), cardUids)
})
