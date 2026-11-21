import { playableActiveDeckId } from '@/app/(protected)/(collection)/services/decks'
import { quickMatch } from '@/app/(protected)/(pvp)/services/rooms'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/quickMatch — joins the public room closest in rating, or opens one, with the active deck. */
export const POST = withAuth(async (_request, _context, userId) => {
  return quickMatch(userId, await playableActiveDeckId(userId))
})
