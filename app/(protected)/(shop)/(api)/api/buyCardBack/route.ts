import { buyCardBack } from '@/app/(protected)/(shop)/services/shop'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/buyCardBack — buys a card back: `{ backId }`. */
export const POST = withAuth(async (request, _context, userId) => {
  const { backId } = (await request.json()) as { backId: string }

  return buyCardBack(userId, String(backId))
})
