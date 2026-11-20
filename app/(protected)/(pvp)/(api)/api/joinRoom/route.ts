import { joinRoom } from '@/app/(protected)/(pvp)/services/rooms'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/joinRoom — joins a room: `{ matchId }` (public) or `{ code }` (private), with `deckId`. */
export const POST = withAuth(async (request, _context, userId) => {
  const { matchId, code, deckId } = (await request.json()) as { matchId?: number; code?: string; deckId: number }

  return joinRoom(userId, { matchId: matchId != null ? Number(matchId) : undefined, code }, Number(deckId))
})
