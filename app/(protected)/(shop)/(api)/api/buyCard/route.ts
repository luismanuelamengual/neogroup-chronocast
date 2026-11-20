import { buyCard } from '@/app/(protected)/(shop)/services/shop'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/buyCard — buys copies of a single card: `{ cardId, count? }`. */
export const POST = withAuth(async (request, _context, userId) => {
  const { cardId, count } = (await request.json()) as { cardId: string; count?: number }

  return buyCard(userId, String(cardId), count ?? 1)
})
