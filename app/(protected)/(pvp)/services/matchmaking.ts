import { DB } from '@neogroup/neorm'
import { PRESTIGE_WINDOW, SEARCH_TIMEOUT_MS } from '@/app/(protected)/(pvp)/data/pvp'
import { SearchStatus } from '@/app/(protected)/(pvp)/models/MatchView'
import { findMatch, MatchRow, parseMatch, saveMatch } from '@/app/(protected)/(pvp)/services/matchRows'
import { activeMatchId, createRoom, joinRoom } from '@/app/(protected)/(pvp)/services/rooms'
import { ApiException } from '@/app/models/ApiException'

/** How far apart in Prestige two players may be after searching this long (it widens with the time). */
export function prestigeWindow(elapsedMs: number): number {
  const steps = Math.floor(Math.max(0, elapsedMs) / PRESTIGE_WINDOW.stepMs)

  return PRESTIGE_WINDOW.start + steps * PRESTIGE_WINDOW.step
}

/** When the search of a waiting room started (its room expires when the search times out). */
const startOf = (room: MatchRow) => (room.expiresAt ?? 0) - SEARCH_TIMEOUT_MS

async function ratingsOf(ids: number[]): Promise<Map<number, number>> {
  const users = await DB.table('users').whereIn('id', ids).get()

  return new Map(users.map((user) => [Number(user.id), Number(user.rating ?? 1200)]))
}

/** The waiting room of a player (its search ticket), if it has one. */
async function searchOf(userId: number): Promise<MatchRow | null> {
  const row = await DB.table('matches').where('status', 'waiting').where('playerA', userId).first()

  return row ? parseMatch(row) : null
}

/**
 * Automatic matchmaking (POST /api/searchMatch, called again every few
 * seconds while the "searching" screen is up). The first call opens a waiting
 * room for the player; every call looks for another player searching whose
 * Prestige is close enough: the window starts narrow and widens with the time
 * the longer of both has been waiting. Of each pair, the one who started
 * searching later takes the seat of the other, so they never pair twice.
 * After SEARCH_TIMEOUT_MS without a rival the search closes.
 */
export async function searchMatch(userId: number, deckId: number, now: number = Date.now()): Promise<SearchStatus> {
  const active = await activeMatchId(userId, now)
  let mine: MatchRow | null = active == null ? null : await findMatch(active)

  if (mine?.status === 'playing') {
    return { status: 'found', id: mine.id }
  }

  if (!mine) {
    await createRoom(userId, 'public', deckId, now, SEARCH_TIMEOUT_MS)
    mine = (await searchOf(userId))!
  }

  const ticketId = mine.id
  const rooms = (await DB.table('matches').where('status', 'waiting').where('visibility', 'public').get())
    .map(parseMatch)
    .filter((room) => room.playerA !== userId && room.id < ticketId)
  const ratings = await ratingsOf([userId, ...rooms.map((room) => room.playerA)])
  const rating = ratings.get(userId) ?? 1200
  const elapsed = now - startOf(mine)
  const candidates = rooms
    .map((room) => ({ room, gap: Math.abs((ratings.get(room.playerA) ?? 1200) - rating) }))
    .filter(({ room, gap }) => gap <= prestigeWindow(Math.max(elapsed, now - startOf(room))))
    .sort((a, b) => a.gap - b.gap || a.room.id - b.room.id)

  for (const { room } of candidates) {
    // Leave the own room first, so nobody takes its seat while this player sits at another.
    if (!(await saveMatch(mine, { status: 'closed' }))) {
      return statusOf(userId, now)
    }

    try {
      return { status: 'found', ...(await joinRoom(userId, { matchId: room.id }, deckId, now)) }
    } catch (error) {
      if (!(error instanceof ApiException) || error.messageKey !== 'errors.roomTaken') {
        throw error
      }

      // Somebody else took that seat: back to waiting, with the same deadline.
      await saveMatch({ ...mine, version: mine.version + 1 }, { status: 'waiting' })
      mine = (await findMatch(mine.id))!
    }
  }

  return { status: 'searching', expiresIn: Math.max(0, (mine.expiresAt ?? now) - now), window: prestigeWindow(elapsed) }
}

/** The search of a player as it stands now (after a race it lost). */
async function statusOf(userId: number, now: number): Promise<SearchStatus> {
  const active = await activeMatchId(userId, now)
  const match = active == null ? null : await findMatch(active)

  if (match?.status === 'playing') {
    return { status: 'found', id: match.id }
  }

  if (match?.status === 'waiting') {
    return {
      status: 'searching',
      expiresIn: Math.max(0, (match.expiresAt ?? now) - now),
      window: prestigeWindow(now - startOf(match))
    }
  }

  return { status: 'timeout' }
}

/**
 * Stops searching (POST /api/cancelSearch): closes the player's waiting room.
 * If a rival took its seat just before, the match is already on: it says so.
 */
export async function cancelSearch(userId: number, now: number = Date.now()): Promise<SearchStatus> {
  for (let attempt = 0; attempt < 3; attempt++) {
    const mine = await searchOf(userId)

    if (!mine) {
      break
    }

    if (await saveMatch(mine, { status: 'closed' })) {
      return { status: 'timeout' }
    }
  }

  const status = await statusOf(userId, now)

  return status.status === 'found' ? status : { status: 'timeout' }
}
