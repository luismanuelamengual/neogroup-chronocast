import { DeckInput } from '@/app/(protected)/(collection)/models/DeckDto'
import { saveDeck } from '@/app/(protected)/(collection)/services/decks'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/saveDeck — creates (no `id`) or updates a deck of the signed-in player. */
export const POST = withAuth(async (request, _context, userId) => {
  const input = (await request.json()) as DeckInput

  return saveDeck(userId, { ...input, id: input.id != null ? Number(input.id) : undefined })
})
