import '@/app/(protected)/(cards)/utils/catalog'
import { DB } from '@neogroup/neorm'
import { randomInt } from 'crypto'
import { QUICK_MATCH_AI_LEVEL, QUICK_MATCH_TTL_MS } from '@/app/(protected)/(battle)/data/quickMatch'
import { QuickMatchReward, QuickMatchTicket } from '@/app/(protected)/(battle)/models/QuickMatchDto'
import { createPracticeMatch } from '@/app/(protected)/(battle)/utils/practice'
import { randomRival } from '@/app/(protected)/(battle)/utils/randomDeck'
import { replayBattle } from '@/app/(protected)/(battle)/utils/replayBattle'
import { readRecord } from '@/app/(protected)/(campaign)/utils/readRecord'
import { getCollection } from '@/app/(protected)/(collection)/services/collection'
import { getDeck, toDeckList } from '@/app/(protected)/(collection)/services/decks'
import { deckProblems } from '@/app/(protected)/(collection)/utils/deckProblems'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { MatchResult } from '@/app/(protected)/(engine)/models/MatchState'
import { dayStart } from '@/app/(protected)/(pvp)/utils/rewards'
import { QUICK_MATCH_GOLD } from '@/app/(protected)/(shop)/data/gold'
import { earnGold } from '@/app/(protected)/(shop)/services/shop'
import { ApiException } from '@/app/models/ApiException'
import { column } from '@/app/utils/rows'

/**
 * Quick matches are rows of `matches` with mode 'quick' and visibility 'cpu':
 * status 'quick' while dealt and unclaimed, 'finished' once paid and 'closed'
 * when a newer one replaced it. Neither status counts as being in a PvP match.
 */
const MODE = 'quick'
const OPEN = 'quick'

/** The gold a quick match pays the player ("a") for its result. */
export function quickMatchGold(result: MatchResult): number {
  return result.winner == null
    ? QUICK_MATCH_GOLD.draw
    : result.winner === 'a'
      ? QUICK_MATCH_GOLD.win
      : QUICK_MATCH_GOLD.loss
}

/** Quick matches that paid gold to the player today (UTC). */
async function prizesToday(userId: number, now: number): Promise<number> {
  const rows = await DB.table('matches')
    .where('mode', MODE)
    .where('status', 'finished')
    .where('playerA', userId)
    .where('finishedAt', '>=', dayStart(now))
    .get()

  return rows.filter((row) => Number((JSON.parse(String(row.rewards ?? '{}')) as { gold?: number }).gold ?? 0) > 0)
    .length
}

/**
 * Deals a quick match: the server picks the seed and the computer's random
 * hero and deck (the same rival again for a rematch of one of the player's
 * quick matches) and keeps them with a copy of the player's deck, so the
 * result can only be claimed for the match it dealt. Any earlier unclaimed
 * quick match of the player is closed.
 */
export async function startQuickMatch(
  userId: number,
  deckId: number,
  rematchOf: number | null = null,
  now: number = Date.now()
): Promise<QuickMatchTicket> {
  const deck = toDeckList(await getDeck(userId, deckId))

  if (deckProblems(deck, await getCollection(userId)).length > 0) {
    throw new ApiException('errors.deckNotPlayable')
  }

  const previous =
    rematchOf != null && Number.isInteger(rematchOf)
      ? await DB.table('matches').where('id', rematchOf).where('mode', MODE).where('playerA', userId).first()
      : null
  const rival: DeckList = previous
    ? (JSON.parse(String(column(previous, 'deckB'))) as DeckList)
    : randomRival(deck.heroId, randomInt(2 ** 31))
  const seed = randomInt(2 ** 31)

  await DB.table('matches')
    .where('mode', MODE)
    .where('status', OPEN)
    .where('playerA', userId)
    .update({ status: 'closed' })
  await DB.table('matches').insert({
    mode: MODE,
    visibility: 'cpu',
    status: OPEN,
    playerA: userId,
    heroA: deck.heroId,
    heroB: rival.heroId,
    deckA: JSON.stringify(deck),
    deckB: JSON.stringify(rival),
    seed,
    version: 0,
    expiresAt: now + QUICK_MATCH_TTL_MS
  })

  const rows = await DB.table('matches').where('mode', MODE).where('status', OPEN).where('playerA', userId).get()

  return { matchId: Math.max(...rows.map((row) => Number(row.id))), seed, deck, rival }
}

/**
 * Claims the gold of a quick match (docs/PLAN.md, section 13.4, as in the
 * campaign): the server plays it again from the seed and decks it dealt, the
 * player's mulligan and timelines, and the computer's deterministic AI. Only
 * a replay that reaches the end pays, by its result, once per match and for
 * at most `QUICK_MATCH_GOLD.prizesPerDay` matches a day.
 */
export async function finishQuickMatch(
  userId: number,
  matchId: unknown,
  rawRecord: unknown,
  now: number = Date.now()
): Promise<QuickMatchReward> {
  const id = Number(matchId)
  const row = Number.isInteger(id)
    ? await DB.table('matches').where('id', id).where('mode', MODE).where('playerA', userId).first()
    : null

  if (!row || String(row.status) !== OPEN) {
    throw new ApiException('errors.invalidTicket')
  }

  if (now > Number(column(row, 'expiresAt') ?? 0)) {
    throw new ApiException('errors.ticketExpired')
  }

  const deck = JSON.parse(String(column(row, 'deckA'))) as DeckList
  const rival = JSON.parse(String(column(row, 'deckB'))) as DeckList
  const initial = createPracticeMatch(deck, rival, Number(row.seed))
  const final = replayBattle(initial, readRecord(rawRecord), QUICK_MATCH_AI_LEVEL)

  if (!final?.result) {
    throw new ApiException('errors.battleNotVerified')
  }

  const result = final.result
  const reward: QuickMatchReward = { ratingDelta: 0, rating: 0, gold: 0, firstWin: false, capped: false }

  await DB.transaction(async () => {
    reward.capped = (await prizesToday(userId, now)) >= QUICK_MATCH_GOLD.prizesPerDay
    reward.gold = reward.capped ? 0 : quickMatchGold(result)

    // Only one claim of the same match closes it (two at once: the second pays nothing).
    const changed = await DB.table('matches')
      .where('id', id)
      .where('status', OPEN)
      .update({
        status: 'finished',
        state: JSON.stringify(final),
        result: JSON.stringify(result),
        rewards: JSON.stringify({ gold: reward.gold }),
        winnerId: result.winner === 'a' ? userId : null,
        finishedAt: now
      })

    if (!changed) {
      throw new ApiException('errors.invalidTicket')
    }

    if (reward.gold > 0) {
      await earnGold(userId, reward.gold)
    }

    reward.rating = Number((await DB.table('users').where('id', userId).first())?.rating ?? 0)
  })

  return reward
}
