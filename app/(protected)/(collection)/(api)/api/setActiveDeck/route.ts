import { setActiveDeck } from '@/app/(protected)/(collection)/services/decks'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/setActiveDeck — `{ id }`: marks a deck of the signed-in player as the one every game mode plays with. */
export const POST = withAuth(async (request, _context, userId) => {
  const { id } = (await request.json()) as { id: number }

  await setActiveDeck(userId, Number(id))

  return null
})
