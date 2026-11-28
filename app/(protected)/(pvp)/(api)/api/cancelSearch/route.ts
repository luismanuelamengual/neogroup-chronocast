import { cancelSearch } from '@/app/(protected)/(pvp)/services/matchmaking'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/cancelSearch — stops searching for a rival (or says which match started just before). */
export const POST = withAuth(async (_request, _context, userId) => cancelSearch(userId))
