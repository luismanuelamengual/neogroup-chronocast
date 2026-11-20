import { MatchVisibility } from '@/app/(protected)/(pvp)/models/MatchView'
import { createRoom } from '@/app/(protected)/(pvp)/services/rooms'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/createRoom — opens a room: `{ visibility, deckId }` → `{ id, code }`. */
export const POST = withAuth(async (request, _context, userId) => {
  const { visibility, deckId } = (await request.json()) as { visibility: MatchVisibility; deckId: number }

  return createRoom(userId, visibility, Number(deckId))
})
