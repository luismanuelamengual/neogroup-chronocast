import { quickSell } from '@/app/(protected)/(shop)/services/shop'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/quickSell — sells every copy beyond the deck limit that the active deck does not need. */
export const POST = withAuth(async (_request, _context, userId) => quickSell(userId))
