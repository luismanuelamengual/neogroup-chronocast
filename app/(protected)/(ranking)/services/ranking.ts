import { DB } from '@neogroup/neorm'
import { leagueOf } from '@/app/(protected)/(pvp)/data/leagues'
import { publicName } from '@/app/(protected)/(pvp)/services/matches'
import { Ranking, RankingEntry } from '@/app/(protected)/(ranking)/models/RankingEntry'
import { column } from '@/app/utils/rows'

/** Players listed in the ranking. */
export const RANKING_SIZE = 100

function entry(row: Record<string, unknown>, position: number): RankingEntry {
  const rating = Number(row.rating ?? 1200)

  return {
    position,
    userId: Number(row.id),
    name: publicName(row),
    rating,
    league: leagueOf(rating),
    matches: Number(column(row, 'pvpMatches') ?? 0)
  }
}

/**
 * The ranking (docs/PLAN.md, section 10.2): the top 100 by Prestige among the
 * players with at least one public match, and the player's own position.
 * Equal ratings share the position.
 */
export async function getRanking(userId: number): Promise<Ranking> {
  const rows = await DB.table('users')
    .where('pvpMatches', '>', 0)
    .where('active', true)
    .orderBy('rating', 'DESC' as never)
    .limit(RANKING_SIZE)
    .get()
  const top: RankingEntry[] = []

  rows.forEach((row, index) => {
    const previous = top[index - 1]
    const rating = Number(row.rating ?? 1200)

    top.push(entry(row, previous && previous.rating === rating ? previous.position : index + 1))
  })

  const mine = await DB.table('users').where('id', userId).first()
  let me: RankingEntry | null = null

  if (mine && Number(column(mine, 'pvpMatches') ?? 0) > 0) {
    const above = await DB.table('users')
      .where('pvpMatches', '>', 0)
      .where('active', true)
      .where('rating', '>', Number(mine.rating ?? 1200))
      .count()

    me = entry(mine, above + 1)
  }

  return { top, me }
}
