import { playableActiveDeckId } from '@/app/(protected)/(collection)/services/decks'
import { searchMatch } from '@/app/(protected)/(pvp)/services/matchmaking'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/searchMatch — starts or continues the search for a rival of similar Prestige, with the active deck. */
export const POST = withAuth(async (_request, _context, userId) => {
  return searchMatch(userId, await playableActiveDeckId(userId))
})
