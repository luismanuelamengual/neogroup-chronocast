import { submitPlan } from '@/app/(protected)/(pvp)/services/matches'
import { withAuth } from '@/app/utils/api-server'

/** POST /api/submitPlan — `{ matchId, phase, timeline }`: the player's timeline for the phase. */
export const POST = withAuth(async (request, _context, userId) => {
  const { matchId, phase, timeline } = (await request.json()) as { matchId: number; phase: number; timeline: unknown }

  return submitPlan(userId, Number(matchId), Number(phase), timeline)
})
