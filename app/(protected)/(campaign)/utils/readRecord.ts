import { BattleRecord } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { PHASE_LIMIT, STARTING_HAND } from '@/app/(protected)/(engine)/data/rules'
import { sanitizeTimeline } from '@/app/(protected)/(pvp)/utils/sanitizeTimeline'
import { ApiException } from '@/app/models/ApiException'

/** The record of a campaign battle sent by the client, rebuilt field by field. */
export function readRecord(value: unknown): BattleRecord {
  const raw = (value ?? {}) as { mulligan?: unknown; timelines?: unknown }
  const mulligan = raw.mulligan ?? []

  if (
    !Array.isArray(mulligan) ||
    mulligan.length > STARTING_HAND ||
    !mulligan.every((uid) => Number.isInteger(uid) && uid >= 0) ||
    !Array.isArray(raw.timelines) ||
    raw.timelines.length > PHASE_LIMIT + 1
  ) {
    throw new ApiException('errors.invalidRecord')
  }

  return { mulligan: mulligan as number[], timelines: raw.timelines.map(sanitizeTimeline) }
}
