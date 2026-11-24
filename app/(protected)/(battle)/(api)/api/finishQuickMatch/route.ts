import { finishQuickMatch } from '@/app/(protected)/(battle)/services/quickMatches'
import { withAuth } from '@/app/utils/api-server'

/**
 * POST /api/finishQuickMatch — `{ matchId, record: { mulligan, timelines } }` → the server replays the quick
 * match and, if the record reaches its end, pays its gold (once per match, a few matches a day).
 */
export const POST = withAuth(async (request, _context, userId) => {
  const { matchId, record } = (await request.json()) as { matchId: number; record: unknown }

  return finishQuickMatch(userId, matchId, record)
})
