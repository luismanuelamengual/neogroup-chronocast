import { deleteDeck } from '@/app/(protected)/(collection)/services/decks'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/deleteDeck — `{ id }`: deletes a deck of the signed-in player. */
export const POST = withAuth(async (request, _context, userId) => {
  const { id } = (await request.json()) as { id: number }

  await deleteDeck(userId, Number(id))

  return null
})
