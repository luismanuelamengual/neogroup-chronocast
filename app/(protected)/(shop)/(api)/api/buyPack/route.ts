import { buyPack } from '@/app/(protected)/(shop)/services/packs'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/buyPack — buys and opens a pack: `{ packId }` → the cards drawn and the shop updated. */
export const POST = withAuth(async (request, _context, userId) => {
  const { packId } = (await request.json()) as { packId: string }

  return buyPack(userId, String(packId))
})
