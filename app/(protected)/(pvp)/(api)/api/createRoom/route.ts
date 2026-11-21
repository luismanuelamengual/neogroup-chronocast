import { playableActiveDeckId } from '@/app/(protected)/(collection)/services/decks'
import { MatchVisibility } from '@/app/(protected)/(pvp)/models/MatchView'
import { createRoom } from '@/app/(protected)/(pvp)/services/rooms'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/createRoom — opens a room with the active deck: `{ visibility }` → `{ id, code }`. */
export const POST = withAuth(async (request, _context, userId) => {
  const { visibility } = (await request.json()) as { visibility: MatchVisibility }

  return createRoom(userId, visibility, await playableActiveDeckId(userId))
})
