import { startQuickMatch } from '@/app/(protected)/(battle)/services/quickMatches'
import { playableActiveDeckId } from '@/app/(protected)/(collection)/services/decks'
import { withAuth } from '@/app/utils/api-server'

/**
 * POST /api/startQuickMatch — `{ rematchOf? }`, with the active deck → the seed, both decks and the id of a
 * quick match dealt by the server (`rematchOf`: one of the player's quick matches, to face the same rival).
 */
export const POST = withAuth(async (request, _context, userId) => {
  const { rematchOf } = ((await request.json().catch(() => ({}))) ?? {}) as { rematchOf?: number | null }

  return startQuickMatch(userId, await playableActiveDeckId(userId), rematchOf == null ? null : Number(rematchOf))
})
