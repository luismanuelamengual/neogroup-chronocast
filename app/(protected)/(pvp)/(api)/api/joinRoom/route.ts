import { playableActiveDeckId } from '@/app/(protected)/(collection)/services/decks'
import { joinRoom } from '@/app/(protected)/(pvp)/services/rooms'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/joinRoom — joins a room with the active deck: `{ matchId }` (public) or `{ code }` (private). */
export const POST = withAuth(async (request, _context, userId) => {
  const { matchId, code } = (await request.json()) as { matchId?: number; code?: string }

  return joinRoom(
    userId,
    { matchId: matchId != null ? Number(matchId) : undefined, code },
    await playableActiveDeckId(userId)
  )
})
