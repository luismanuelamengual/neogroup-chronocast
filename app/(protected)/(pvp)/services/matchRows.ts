import { DB } from '@neogroup/neorm'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { MatchStatus, MatchVisibility, PlayerReward, Resolution } from '@/app/(protected)/(pvp)/models/MatchView'
import { MatchProgress } from '@/app/(protected)/(pvp)/utils/advance'
import { ApiException } from '@/app/models/ApiException'
import { column } from '@/app/utils/rows'

/** A row of `matches`, with its JSON columns parsed. */
export interface MatchRow extends MatchProgress {
  id: number
  visibility: MatchVisibility
  code: string | null
  playerA: number
  playerB: number | null
  heroA: string
  heroB: string | null
  deckA: DeckList
  deckB: DeckList | null
  version: number
  expiresAt: number | null
  rewards: Record<PlayerId, PlayerReward> | null
}

const json = <T>(value: unknown): T | null => (value == null || value === '' ? null : (JSON.parse(String(value)) as T))
const num = (value: unknown): number | null => (value == null ? null : Number(value))

export function parseMatch(row: Record<string, unknown>): MatchRow {
  return {
    id: Number(row.id),
    visibility: String(row.visibility) as MatchVisibility,
    code: (column(row, 'code') as string | null) ?? null,
    status: String(row.status) as MatchStatus,
    playerA: Number(column(row, 'playerA')),
    playerB: num(column(row, 'playerB')),
    heroA: String(column(row, 'heroA')),
    heroB: (column(row, 'heroB') as string | null) ?? null,
    deckA: json<DeckList>(column(row, 'deckA'))!,
    deckB: json<DeckList>(column(row, 'deckB')),
    state: json(column(row, 'state')),
    planA: json(column(row, 'planA')),
    planB: json(column(row, 'planB')),
    lastResolution: json<Resolution>(column(row, 'lastResolution')),
    version: Number(row.version),
    phaseDeadline: num(column(row, 'phaseDeadline')),
    expiresAt: num(column(row, 'expiresAt')),
    rewards: json(column(row, 'rewards'))
  }
}

/** The columns of the progress of a match, ready to save. */
export function progressColumns(progress: MatchProgress): Record<string, unknown> {
  return {
    status: progress.status,
    state: progress.state ? JSON.stringify(progress.state) : null,
    planA: progress.planA ? JSON.stringify(progress.planA) : null,
    planB: progress.planB ? JSON.stringify(progress.planB) : null,
    lastResolution: progress.lastResolution ? JSON.stringify(progress.lastResolution) : null,
    phaseDeadline: progress.phaseDeadline
  }
}

export async function findMatch(matchId: number): Promise<MatchRow | null> {
  const row = await DB.table('matches').where('id', matchId).first()

  return row ? parseMatch(row) : null
}

export async function loadMatch(matchId: number): Promise<MatchRow> {
  const match = Number.isInteger(matchId) ? await findMatch(matchId) : null

  if (!match) {
    throw new ApiException('errors.matchNotFound', 404)
  }

  return match
}

/**
 * Saves changes to a match only if nobody saved it since it was read (the
 * optimistic lock of docs/PLAN.md, section 12.2). True when it was saved.
 */
export async function saveMatch(match: MatchRow, columns: Record<string, unknown>): Promise<boolean> {
  const affected = await DB.table('matches')
    .where('id', match.id)
    .where('version', match.version)
    .update({ ...columns, version: match.version + 1 })

  return affected === 1
}

/** The seat of a player in a match ('a' hosts it). */
export function seatOf(match: MatchRow, userId: number): PlayerId {
  if (match.playerA === userId) {
    return 'a'
  }

  if (match.playerB === userId) {
    return 'b'
  }

  throw new ApiException('errors.notInMatch', 403)
}
