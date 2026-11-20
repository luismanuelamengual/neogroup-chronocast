import { listRooms } from '@/app/(protected)/(pvp)/services/rooms'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/listRooms — the public rooms waiting for a rival. */
export const POST = withAuth(async (_request, _context, userId) => listRooms(userId))
