import { sellCards } from '@/app/(protected)/(shop)/services/shop'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/sellCards — sells copies of cards: `{ cards: { [cardId]: count } }`. */
export const POST = withAuth(async (request, _context, userId) => {
  const { cards } = (await request.json()) as { cards: Record<string, number> }

  return sellCards(userId, cards)
})
