import { getMatchState } from '@/app/(protected)/(pvp)/services/matches'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/getMatchState — `{ matchId, version }` → the match for this player, or null if it didn't change. */
export const POST = withAuth(async (request, _context, userId) => {
  const { matchId, version } = (await request.json()) as { matchId: number; version?: number | null }

  return getMatchState(userId, Number(matchId), version == null ? null : Number(version))
})
