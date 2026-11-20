import '@/app/(protected)/(cards)/utils/catalog'
import { DB } from '@neogroup/neorm'
import { randomInt } from 'crypto'
import { getCollection } from '@/app/(protected)/(collection)/services/collection'
import { getDeck, toDeckList } from '@/app/(protected)/(collection)/services/decks'
import { deckProblems } from '@/app/(protected)/(collection)/utils/deckProblems'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { CODE_LENGTH, CODE_LETTERS, MULLIGAN_SECONDS, ROOM_TTL_MS } from '@/app/(protected)/(pvp)/data/pvp'
import { MatchVisibility, RoomSummary } from '@/app/(protected)/(pvp)/models/MatchView'
import { publicName } from '@/app/(protected)/(pvp)/services/matches'
import { parseMatch, saveMatch } from '@/app/(protected)/(pvp)/services/matchRows'
import { ApiException } from '@/app/models/ApiException'

/** Waiting rooms past their time close (lazily, whenever the rooms are read). */
async function closeExpiredRooms(now: number): Promise<void> {
  await DB.table('matches').where('status', 'waiting').where('expiresAt', '<', now).update({ status: 'closed' })
}

/** The match a player is in right now (waiting for a rival or playing), if any. */
export async function activeMatchId(userId: number, now: number = Date.now()): Promise<number | null> {
  await closeExpiredRooms(now)

  const rows = await DB.table('matches').whereIn('status', ['waiting', 'playing']).whereIn('playerA', [userId]).get()
  const joined = await DB.table('matches').where('status', 'playing').where('playerB', userId).get()
  const ids = [...rows, ...joined].map((row) => Number(row.id))

  return ids.length > 0 ? Math.max(...ids) : null
}

async function ensureFree(userId: number, now: number): Promise<void> {
  const current = await activeMatchId(userId, now)

  if (current != null) {
    throw new ApiException('errors.alreadyInMatch', 400, { id: current })
  }
}

/** One of the player's decks, ready to play (validated here, docs/PLAN.md section 12.1). */
async function playableDeck(userId: number, deckId: number): Promise<DeckList> {
  const deck = toDeckList(await getDeck(userId, Number(deckId)))

  if (deckProblems(deck, await getCollection(userId)).length > 0) {
    throw new ApiException('errors.deckNotPlayable')
  }

  return deck
}

async function newCode(): Promise<string> {
  for (;;) {
    const code = Array.from({ length: CODE_LENGTH }, () => CODE_LETTERS[randomInt(CODE_LETTERS.length)]).join('')

    if (!(await DB.table('matches').where('code', code).where('status', 'waiting').first())) {
      return code
    }
  }
}

/** Opens a room with one of the player's decks: public (in the lobby) or private (with a code). */
export async function createRoom(
  userId: number,
  visibility: MatchVisibility,
  deckId: number,
  now: number = Date.now()
): Promise<{ id: number; code: string | null }> {
  if (visibility !== 'public' && visibility !== 'private') {
    throw new ApiException('errors.invalidVisibility')
  }

  await ensureFree(userId, now)

  const deck = await playableDeck(userId, deckId)
  const code = visibility === 'private' ? await newCode() : null

  await DB.table('matches').insert({
    mode: 'pvp',
    visibility,
    code,
    status: 'waiting',
    playerA: userId,
    heroA: deck.heroId,
    deckA: JSON.stringify(deck),
    version: 0,
    expiresAt: now + ROOM_TTL_MS
  })

  const rows = await DB.table('matches').where('playerA', userId).where('status', 'waiting').get()

  return { id: Math.max(...rows.map((row) => Number(row.id))), code }
}

/** The public rooms waiting for a rival, the closest in rating first. */
export async function listRooms(userId: number, now: number = Date.now()): Promise<RoomSummary[]> {
  await closeExpiredRooms(now)

  const rooms = (await DB.table('matches').where('status', 'waiting').where('visibility', 'public').get())
    .map(parseMatch)
    .filter((room) => room.playerA !== userId)

  if (rooms.length === 0) {
    return []
  }

  const users = await DB.table('users')
    .whereIn('id', [userId, ...rooms.map((room) => room.playerA)])
    .get()
  const userOf = (id: number) => users.find((user) => Number(user.id) === id) ?? { id }
  const mine = Number(userOf(userId).rating ?? 1200)

  return rooms
    .map((room) => ({
      id: room.id,
      host: publicName(userOf(room.playerA)),
      rating: Number(userOf(room.playerA).rating ?? 1200),
      heroId: room.heroA,
      expiresIn: Math.max(0, (room.expiresAt ?? now) - now)
    }))
    .sort((a, b) => Math.abs(a.rating - mine) - Math.abs(b.rating - mine) || a.id - b.id)
}

/** Takes the seat of the rival in a room and starts the match (the mulligan first). */
export async function joinRoom(
  userId: number,
  target: { matchId?: number; code?: string },
  deckId: number,
  now: number = Date.now()
): Promise<{ id: number }> {
  await ensureFree(userId, now)

  const code = String(target.code ?? '')
    .trim()
    .toUpperCase()
  const row = code
    ? await DB.table('matches').where('code', code).where('status', 'waiting').first()
    : await DB.table('matches').where('id', Number(target.matchId)).first()

  if (!row) {
    throw new ApiException(code ? 'errors.roomCodeNotFound' : 'errors.roomNotFound', 404)
  }

  const room = parseMatch(row)

  if (room.status !== 'waiting') {
    throw new ApiException('errors.roomTaken')
  }

  if (room.visibility === 'private' && !code) {
    throw new ApiException('errors.roomNotFound', 404)
  }

  if (room.playerA === userId) {
    throw new ApiException('errors.ownRoom')
  }

  const deck = await playableDeck(userId, deckId)
  const seed = randomInt(2 ** 31 - 1)
  const { state } = createMatch({ seed, decks: { a: room.deckA, b: deck } })
  const saved = await saveMatch(room, {
    status: 'playing',
    playerB: userId,
    heroB: deck.heroId,
    deckB: JSON.stringify(deck),
    seed,
    state: JSON.stringify(state),
    phaseDeadline: now + MULLIGAN_SECONDS * 1000
  })

  if (!saved) {
    throw new ApiException('errors.roomTaken')
  }

  return { id: room.id }
}

/** Quick match: joins the public room closest in rating, or opens one. */
export async function quickMatch(
  userId: number,
  deckId: number,
  now: number = Date.now()
): Promise<{ id: number; joined: boolean }> {
  for (const room of await listRooms(userId, now)) {
    try {
      return { ...(await joinRoom(userId, { matchId: room.id }, deckId, now)), joined: true }
    } catch (error) {
      if (!(error instanceof ApiException) || error.messageKey !== 'errors.roomTaken') {
        throw error
      }
    }
  }

  return { id: (await createRoom(userId, 'public', deckId, now)).id, joined: false }
}
