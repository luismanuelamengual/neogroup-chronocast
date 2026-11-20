import '@/app/(protected)/(cards)/utils/catalog'
import { DB } from '@neogroup/neorm'
import { randomInt } from 'crypto'
import { CAMPAIGNS, findCampaign } from '@/app/(protected)/(campaign)/data/campaigns'
import { STAGES_PER_CAMPAIGN } from '@/app/(protected)/(campaign)/data/difficulty'
import { BattleReward, BattleTicket, CampaignSummary } from '@/app/(protected)/(campaign)/models/CampaignDto'
import { PLAYER, replayCampaign } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { readRecord } from '@/app/(protected)/(campaign)/utils/readRecord'
import { issueTicket, readTicket } from '@/app/(protected)/(campaign)/utils/ticket'
import { addCards, getCollection } from '@/app/(protected)/(collection)/services/collection'
import { getDeck, toDeckList } from '@/app/(protected)/(collection)/services/decks'
import { deckProblems } from '@/app/(protected)/(collection)/utils/deckProblems'
import { findPack } from '@/app/(protected)/(shop)/data/packs'
import { openPack } from '@/app/(protected)/(shop)/services/packs'
import { earnGold } from '@/app/(protected)/(shop)/services/shop'
import { ApiException } from '@/app/models/ApiException'
import { column } from '@/app/utils/rows'

/** Battles won by a player in each campaign it started. */
export async function getProgress(userId: number): Promise<Record<string, number>> {
  const rows = await DB.table('campaign_progress').where('userId', userId).get()

  return Object.fromEntries(rows.map((row) => [String(column(row, 'heroId')), Number(row.stage ?? 0)]))
}

/** Every campaign, with whether the player can play it and how far it got. */
export async function listCampaigns(userId: number): Promise<CampaignSummary[]> {
  const [progress, collection] = await Promise.all([getProgress(userId), getCollection(userId)])

  return CAMPAIGNS.map((campaign) => ({
    heroId: campaign.heroId,
    owned: (collection[campaign.heroId] ?? 0) > 0,
    stage: progress[campaign.heroId] ?? 0,
    completed: (progress[campaign.heroId] ?? 0) >= STAGES_PER_CAMPAIGN,
    rewardCardId: campaign.rewardCardId
  }))
}

export async function getCampaignSummary(userId: number, heroId: string): Promise<CampaignSummary> {
  const summary = (await listCampaigns(userId)).find((campaign) => campaign.heroId === heroId)

  if (!summary) {
    throw new ApiException('errors.campaignNotFound', 404)
  }

  return summary
}

/**
 * Starts a campaign battle (docs/PLAN.md, section 13.1): the player owns the
 * hero, the battle is unlocked (won before, or the next one) and the deck is
 * one of its playable decks of that hero. The match itself runs in the
 * browser; the ticket carries what the server needs to replay it.
 */
export async function startBattle(
  userId: number,
  heroId: string,
  stage: number,
  deckId: number,
  now: number = Date.now()
): Promise<BattleTicket> {
  const summary = await getCampaignSummary(userId, heroId)

  if (!summary.owned) {
    throw new ApiException('errors.campaignLocked')
  }

  if (!Number.isInteger(stage) || stage < 1 || stage > Math.min(summary.stage + 1, STAGES_PER_CAMPAIGN)) {
    throw new ApiException('errors.stageLocked')
  }

  const deck = toDeckList(await getDeck(userId, deckId))

  if (deck.heroId !== heroId || deckProblems(deck, await getCollection(userId)).length > 0) {
    throw new ApiException('errors.deckNotPlayable')
  }

  const seed = randomInt(2 ** 31)

  return {
    ticket: issueTicket({ userId, heroId, stage, seed, deck, issuedAt: now }),
    heroId,
    stage,
    seed,
    deck
  }
}

/**
 * Claims a campaign win (docs/PLAN.md, sections 13.4 and 13.5). The server
 * plays the battle again from the ticket's seed and deck, the player's
 * mulligan and timelines, and the computer's deterministic AI; only if the
 * player wins that replay does it count. The first win of a battle unlocks the
 * next one and pays its gold, its pack (battles 5 and 10) and, for the boss,
 * the hero's exclusive card. Winning a battle again pays nothing.
 */
export async function finishBattle(
  userId: number,
  ticket: unknown,
  rawRecord: unknown,
  now: number = Date.now()
): Promise<BattleReward> {
  const data = readTicket(ticket, userId, now)
  const campaign = findCampaign(data.heroId)
  const stage = campaign?.stages[data.stage - 1]

  if (!campaign || !stage) {
    throw new ApiException('errors.invalidTicket')
  }

  const final = replayCampaign(stage, data.deck, data.seed, readRecord(rawRecord))

  if (!final || final.result?.winner !== PLAYER) {
    throw new ApiException('errors.battleNotVerified')
  }

  const reward: BattleReward = {
    stage: stage.number,
    firstWin: false,
    gold: 0,
    pack: null,
    rewardCardId: null,
    progress: 0
  }

  await DB.transaction(async () => {
    const row = await DB.table('campaign_progress').where('userId', userId).where('heroId', campaign.heroId).first()
    const won = Number(row?.stage ?? 0)

    reward.progress = won

    if (stage.number !== won + 1) {
      return
    }

    // Only one claim of the same battle can move the progress (two at once: the second pays nothing).
    if (row) {
      const changed = await DB.table('campaign_progress')
        .where('id', Number(row.id))
        .where('stage', won)
        .update({ stage: stage.number, ...(stage.boss ? { completedAt: now } : {}) })

      if (!changed) {
        return
      }
    } else {
      await DB.table('campaign_progress').insert({
        userId,
        heroId: campaign.heroId,
        stage: stage.number,
        completedAt: stage.boss ? now : null
      })
    }

    reward.firstWin = true
    reward.progress = stage.number
    reward.gold = stage.gold
    await earnGold(userId, stage.gold)

    const pack = stage.pack ? findPack(stage.pack) : undefined

    if (pack) {
      reward.pack = { id: pack.id, ...(await openPack(userId, pack)) }
    }

    if (stage.boss) {
      reward.rewardCardId = campaign.rewardCardId
      await addCards(userId, { [campaign.rewardCardId]: 1 })
    }
  })

  return reward
}
