import { forfeitMatch } from '@/app/(protected)/(pvp)/services/matches'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/forfeitMatch — `{ matchId }`: surrender (or close the room while nobody joined). */
export const POST = withAuth(async (request, _context, userId) => {
  const { matchId } = (await request.json()) as { matchId: number }

  return forfeitMatch(userId, Number(matchId))
})
