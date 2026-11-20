import { chooseStarter } from '@/app/(protected)/(collection)/services/collection'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/chooseStarter — `{ heroId }`: the first visit's hero; grants its starter pack and deck. */
export const POST = withAuth(async (request, _context, userId) => {
  const { heroId } = (await request.json()) as { heroId: string }

  return chooseStarter(userId, String(heroId ?? ''))
})
