import '@/app/(protected)/(cards)/utils/catalog'
import { DB } from '@neogroup/neorm'
import { PLANNING_SECONDS } from '@/app/(protected)/(engine)/data/rules'
import { opponentOf, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { mulligan } from '@/app/(protected)/(engine)/utils/createMatch'
import { forfeit } from '@/app/(protected)/(engine)/utils/endMatch'
import { MAX_CATCH_UP } from '@/app/(protected)/(pvp)/data/pvp'
import { MatchView, PlayerReward, SeatInfo } from '@/app/(protected)/(pvp)/models/MatchView'
import {
  findMatch,
  loadMatch,
  MatchRow,
  progressColumns,
  saveMatch,
  seatOf
} from '@/app/(protected)/(pvp)/services/matchRows'
import { advance, finishedStatus, inMulligan, MatchProgress } from '@/app/(protected)/(pvp)/utils/advance'
import { redactFrames, redactState } from '@/app/(protected)/(pvp)/utils/redact'
import { dayStart, matchRewards } from '@/app/(protected)/(pvp)/utils/rewards'
import { sanitizeTimeline } from '@/app/(protected)/(pvp)/utils/sanitizeTimeline'
import { ApiException } from '@/app/models/ApiException'
import { column } from '@/app/utils/rows'
import { getPublicName } from '@/app/utils/users'

type UserRow = Record<string, unknown>

async function usersOf(match: MatchRow): Promise<Record<PlayerId, UserRow | undefined>> {
  const ids = [match.playerA, match.playerB].filter((id): id is number => id != null)
  const rows = await DB.table('users').whereIn('id', ids).get()
  const find = (id: number | null) => rows.find((row) => Number(row.id) === id)

  return { a: find(match.playerA), b: find(match.playerB) }
}

/** How many private matches two players finished against each other today (before this one). */
async function privateMatchesToday(match: MatchRow, now: number): Promise<number> {
  const rows = await DB.table('matches')
    .where('visibility', 'private')
    .where('status', 'finished')
    .where('finishedAt', '>=', dayStart(now))
    .whereIn('playerA', [match.playerA, match.playerB])
    .get()

  return rows.filter((row) => {
    const pair = [Number(column(row, 'playerA')), Number(column(row, 'playerB'))]

    return Number(row.id) !== match.id && pair.includes(match.playerA) && pair.includes(match.playerB!)
  }).length
}

/**
 * Saves the progress of a match; when it just ended, also its rewards and the
 * players' new rating and gold, all in one transaction. False when someone
 * else moved the match first.
 */
async function commit(match: MatchRow, progress: MatchProgress, now: number): Promise<boolean> {
  const ended = match.status === 'playing' && progress.status !== 'playing'

  if (!ended) {
    return saveMatch(match, progressColumns(progress))
  }

  try {
    await DB.transaction(async () => {
      const users = await usersOf(match)
      const result = progress.state!.result!
      const rating = (player: PlayerId) => Number(users[player]?.rating ?? 1200)
      const firstWin = (player: PlayerId) => Number(column(users[player] ?? {}, 'lastWinAt') ?? 0) < dayStart(now)
      const rewards = matchRewards({
        visibility: match.visibility,
        result,
        ratings: { a: rating('a'), b: rating('b') },
        firstWinToday: { a: firstWin('a'), b: firstWin('b') },
        privateCapReached: match.visibility === 'private' && (await privateMatchesToday(match, now)) >= 3
      })
      const winner = result.winner
      const saved = await saveMatch(match, {
        ...progressColumns(progress),
        rewards: JSON.stringify(rewards),
        result: JSON.stringify(result),
        winnerId: winner == null ? null : winner === 'a' ? match.playerA : match.playerB,
        finishedAt: now
      })

      if (!saved) {
        throw new Error('conflict')
      }

      for (const player of ['a', 'b'] as PlayerId[]) {
        const user = users[player]

        if (!user) {
          continue
        }

        const changes: Record<string, unknown> = {
          gold: Number(user.gold ?? 0) + rewards[player].gold,
          rating: rewards[player].rating
        }

        if (match.visibility === 'public') {
          changes.pvpMatches = Number(column(user, 'pvpMatches') ?? 0) + 1

          if (winner === player) {
            changes.lastWinAt = now
          }
        }

        await DB.table('users').where('id', Number(user.id)).update(changes)
      }
    })

    return true
  } catch (error) {
    if (error instanceof Error && error.message === 'conflict') {
      return false
    }

    throw error
  }
}

/**
 * Brings a match up to date: whatever is due (a deadline passed, both
 * timelines in) is done now, in the request that finds it (docs/PLAN.md,
 * section 12.2). If another request got there first, it reads it again.
 */
export async function tick(match: MatchRow, now: number = Date.now()): Promise<MatchRow> {
  let current = match

  for (let i = 0; i < MAX_CATCH_UP; i++) {
    const progress = advance(current, now)

    if (!progress) {
      break
    }

    if (!(await commit(current, progress, now))) {
      current = (await findMatch(current.id))!
      continue
    }

    // An ended match is read again: the rewards were saved with it.
    current =
      progress.status === 'playing'
        ? { ...current, ...progress, version: current.version + 1 }
        : (await findMatch(current.id))!
  }

  return current
}

/** Applies a change of a player to a match, reading it again if another request saved it in between. */
async function update(
  matchId: number,
  now: number,
  change: (match: MatchRow) => MatchProgress | null
): Promise<MatchRow> {
  for (let attempt = 0; attempt < 5; attempt++) {
    const match = await tick(await loadMatch(matchId), now)
    const progress = change(match)

    if (!progress) {
      return match
    }

    if (await commit(match, progress, now)) {
      return tick(await loadMatch(matchId), now)
    }
  }

  throw new ApiException('errors.matchBusy', 409)
}

/** The name other players see of a raw user row. */
export function publicName(user: UserRow): string {
  return getPublicName({
    id: Number(user.id),
    name: (user.name as string | null) ?? null,
    lastName: (column(user, 'lastName') as string | null) ?? null,
    nickname: (user.nickname as string | null) ?? null
  })
}

function seatInfo(user: UserRow | undefined, heroId: string | null): SeatInfo | null {
  if (!user || !heroId) {
    return null
  }

  return {
    name: publicName(user),
    rating: Number(user.rating ?? 1200),
    heroId
  }
}

/** A match as one of its players may see it. */
export async function matchView(match: MatchRow, userId: number, now: number = Date.now()): Promise<MatchView> {
  const me = seatOf(match, userId)
  const rival = opponentOf(me)
  const users = await usersOf(match)
  const state = match.state
  const plans = { a: match.planA, b: match.planB }
  const stage =
    match.status === 'waiting'
      ? 'waiting'
      : match.status !== 'playing' || !state
        ? 'over'
        : inMulligan(state)
          ? 'mulligan'
          : 'planning'
  const deadline = stage === 'waiting' ? match.expiresAt : stage === 'over' ? null : match.phaseDeadline
  const heroes = { a: match.heroA, b: match.heroB }
  const reward: PlayerReward | null = match.rewards?.[me] ?? null

  return {
    id: match.id,
    version: match.version,
    status: match.status,
    visibility: match.visibility,
    code: match.code,
    me,
    you: seatInfo(users[me], heroes[me])!,
    rival: seatInfo(users[rival], heroes[rival]),
    stage,
    state: state ? redactState(state, me) : null,
    deadlineIn: deadline == null ? 0 : Math.max(0, deadline - now),
    submitted: stage === 'mulligan' ? state!.players[me].mulliganDone : stage === 'planning' && plans[me] != null,
    rivalReady:
      stage === 'mulligan' ? state!.players[rival].mulliganDone : stage === 'planning' && plans[rival] != null,
    resolution: match.lastResolution
      ? { ...match.lastResolution, frames: redactFrames(match.lastResolution.frames, me) }
      : null,
    reward
  }
}

/**
 * POST /api/getMatchState: the match brought up to date, or null when it
 * didn't change since `version` (the polling of docs/PLAN.md, section 12.3).
 */
export async function getMatchState(
  userId: number,
  matchId: number,
  version: number | null,
  now: number = Date.now()
): Promise<MatchView | null> {
  const match = await tick(await loadMatch(matchId), now)

  seatOf(match, userId)

  return version === match.version ? null : matchView(match, userId, now)
}

function playing(match: MatchRow): void {
  if (match.status !== 'playing' || !match.state) {
    throw new ApiException('errors.matchNotPlaying')
  }
}

/** The opening hand: the cards to put back (once, before phase 1). */
export async function submitMulligan(
  userId: number,
  matchId: number,
  cardUids: number[],
  now: number = Date.now()
): Promise<MatchView> {
  const match = await update(matchId, now, (current) => {
    const me = seatOf(current, userId)

    playing(current)

    if (!inMulligan(current.state!) || current.state!.players[me].mulliganDone) {
      return null
    }

    const uids = Array.isArray(cardUids) ? cardUids.filter((uid) => Number.isInteger(uid)) : []
    const state = mulligan(current.state!, me, uids)
    const bothDone = !inMulligan(state)

    return { ...current, state, phaseDeadline: bothDone ? now + PLANNING_SECONDS * 1000 : current.phaseDeadline }
  })

  return matchView(match, userId, now)
}

/**
 * The timeline of a player for the phase being programmed. It can be sent
 * again until the rival's is in too: then the phase resolves at once.
 */
export async function submitPlan(
  userId: number,
  matchId: number,
  phase: number,
  timeline: unknown,
  now: number = Date.now()
): Promise<MatchView> {
  const plan = sanitizeTimeline(timeline)
  const match = await update(matchId, now, (current) => {
    const me = seatOf(current, userId)

    playing(current)

    if (inMulligan(current.state!) || current.state!.phase !== phase) {
      throw new ApiException('errors.phaseOver')
    }

    return { ...current, [me === 'a' ? 'planA' : 'planB']: plan }
  })

  return matchView(match, userId, now)
}

/** The player gives up: the rival wins (and the room closes, if nobody joined yet). */
export async function forfeitMatch(userId: number, matchId: number, now: number = Date.now()): Promise<MatchView> {
  const match = await update(matchId, now, (current) => {
    const me = seatOf(current, userId)

    if (current.status === 'waiting') {
      return { ...current, status: 'closed' }
    }

    if (current.status !== 'playing' || !current.state) {
      return null
    }

    const state = forfeit(current.state, me, 'surrender')

    return { ...current, state, status: finishedStatus(state), planA: null, planB: null, phaseDeadline: null }
  })

  return matchView(match, userId, now)
}
