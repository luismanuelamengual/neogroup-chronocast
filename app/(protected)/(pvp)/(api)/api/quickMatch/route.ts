import { quickMatch } from '@/app/(protected)/(pvp)/services/rooms'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/quickMatch — joins the public room closest in rating, or opens one: `{ deckId }`. */
export const POST = withAuth(async (request, _context, userId) => {
  const { deckId } = (await request.json()) as { deckId: number }

  return quickMatch(userId, Number(deckId))
})
