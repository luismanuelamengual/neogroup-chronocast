import { DB } from '@neogroup/neorm'
import { beforeEach, describe, expect, it } from 'vitest'
import { CAMPAIGNS, findStage } from '@/app/(protected)/(campaign)/data/campaigns'
import { BattleTicket } from '@/app/(protected)/(campaign)/models/CampaignDto'
import { finishBattle, listCampaigns, startBattle } from '@/app/(protected)/(campaign)/services/campaigns'
import { BattleRecord, createCampaignMatch } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { TICKET_TTL_MS } from '@/app/(protected)/(campaign)/utils/ticket'
import { chooseStarter, getCollection } from '@/app/(protected)/(collection)/services/collection'
import { chooseTimeline } from '@/app/(protected)/(engine)/ai/chooseTimeline'
import { mulligan } from '@/app/(protected)/(engine)/utils/createMatch'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { createUser, resetDatabase } from '@/tests/setup/database'

const HERO = 'kora-wildfang'
const T0 = Date.UTC(2026, 10, 20, 12, 0, 0)

/** Plays a dealt battle as the browser does, the player's side by the strongest computer level. */
function play(dealt: BattleTicket): { record: BattleRecord; won: boolean } {
  const stage = findStage(dealt.heroId, dealt.stage)!
  let state = mulligan(createCampaignMatch(stage, dealt.deck, dealt.seed), 'a', [])
  const record: BattleRecord = { mulligan: [], timelines: [] }

  while (state.status === 'planning') {
    const timeline = chooseTimeline(state, 'a', 4)

    record.timelines.push(timeline)
    state = resolvePhase(state, { a: timeline, b: chooseTimeline(state, 'b', stage.aiLevel) }).state
  }

  return { record, won: state.result?.winner === 'a' }
}

/** Starts the battle until the player wins one, and returns its ticket and record. */
async function winBattle(userId: number, deckId: number, stage: number) {
  for (let attempt = 0; attempt < 30; attempt++) {
    const dealt = await startBattle(userId, HERO, stage, deckId, T0)
    const { record, won } = play(dealt)

    if (won) {
      return { dealt, record }
    }
  }

  throw new Error('no win in 30 attempts')
}

async function gold(userId: number): Promise<number> {
  return Number((await DB.table('users').where('id', userId).first())!.gold)
}

async function setProgress(userId: number, stage: number): Promise<void> {
  await DB.table('campaign_progress').insert({ userId, heroId: HERO, stage })
}

describe('campaigns', () => {
  let userId: number
  let deckId: number

  beforeEach(async () => {
    await resetDatabase()
    userId = await createUser()
    deckId = (await chooseStarter(userId, HERO)).deckId
  })

  it('lists every campaign with the progress, open only for the heroes the player owns', async () => {
    const campaigns = await listCampaigns(userId)

    expect(campaigns.map((campaign) => [campaign.heroId, campaign.owned, campaign.stage])).toEqual(
      CAMPAIGNS.map((campaign) => [campaign.heroId, campaign.heroId === HERO, 0])
    )
  })

  it('only starts unlocked battles of an owned hero, with a playable deck of that hero', async () => {
    await expect(startBattle(userId, 'legate-varro', 1, deckId)).rejects.toMatchObject({
      messageKey: 'errors.campaignLocked'
    })
    await expect(startBattle(userId, HERO, 2, deckId)).rejects.toMatchObject({ messageKey: 'errors.stageLocked' })
    await expect(startBattle(userId, HERO, 0, deckId)).rejects.toMatchObject({ messageKey: 'errors.stageLocked' })
    await expect(startBattle(userId, 'nobody', 1, deckId)).rejects.toMatchObject({
      messageKey: 'errors.campaignNotFound'
    })
    await expect(startBattle(userId, HERO, 1, 999)).rejects.toMatchObject({ messageKey: 'errors.deckNotFound' })

    const dealt = await startBattle(userId, HERO, 1, deckId)

    expect(dealt).toMatchObject({ heroId: HERO, stage: 1 })
    expect(dealt.deck.cards).toHaveLength(39)
  })

  it('a verified first win pays the gold and unlocks the next battle; winning it again pays nothing', async () => {
    const before = await gold(userId)
    const { dealt, record } = await winBattle(userId, deckId, 1)
    const reward = await finishBattle(userId, dealt.ticket, record, T0)

    expect(reward).toEqual({ stage: 1, firstWin: true, gold: 50, pack: null, rewardCardId: null, progress: 1 })
    expect(await gold(userId)).toBe(before + 50)
    expect((await listCampaigns(userId)).find((campaign) => campaign.heroId === HERO)?.stage).toBe(1)
    await expect(startBattle(userId, HERO, 2, deckId, T0)).resolves.toMatchObject({ stage: 2 })

    // The same claim again, and a new win of the same battle: no rewards.
    expect(await finishBattle(userId, dealt.ticket, record, T0)).toMatchObject({
      firstWin: false,
      gold: 0,
      progress: 1
    })

    const again = await winBattle(userId, deckId, 1)

    expect(await finishBattle(userId, again.dealt.ticket, again.record, T0)).toMatchObject({ firstWin: false })
    expect(await gold(userId)).toBe(before + 50)
  })

  it('rejects a record that does not win the replay, a forged ticket and an expired one', async () => {
    const { dealt, record } = await winBattle(userId, deckId, 1)
    const idle = { mulligan: [], timelines: record.timelines.map(() => [{ kind: 'wait' }]) }
    const [payload, signature] = dealt.ticket.split('.')
    const forged = JSON.parse(Buffer.from(payload, 'base64url').toString('utf-8'))

    forged.stage = 10
    const forgedTicket = `${Buffer.from(JSON.stringify(forged)).toString('base64url')}.${signature}`

    await expect(finishBattle(userId, dealt.ticket, idle, T0)).rejects.toMatchObject({
      messageKey: 'errors.battleNotVerified'
    })
    await expect(finishBattle(userId, dealt.ticket, { timelines: 'nope' }, T0)).rejects.toMatchObject({
      messageKey: 'errors.invalidRecord'
    })
    await expect(finishBattle(userId, forgedTicket, record, T0)).rejects.toMatchObject({
      messageKey: 'errors.invalidTicket'
    })
    await expect(finishBattle(userId + 1, dealt.ticket, record, T0)).rejects.toMatchObject({
      messageKey: 'errors.invalidTicket'
    })
    await expect(finishBattle(userId, dealt.ticket, record, T0 + TICKET_TTL_MS + 1)).rejects.toMatchObject({
      messageKey: 'errors.ticketExpired'
    })
    expect(await listCampaigns(userId)).toContainEqual(expect.objectContaining({ heroId: HERO, stage: 0 }))
  })

  it('battle 5 opens a free pack into the collection', async () => {
    await setProgress(userId, 4)

    const cardsBefore = Object.values(await getCollection(userId)).reduce((sum, count) => sum + count, 0)
    const { dealt, record } = await winBattle(userId, deckId, 5)
    const reward = await finishBattle(userId, dealt.ticket, record, T0)
    const cardsAfter = Object.values(await getCollection(userId)).reduce((sum, count) => sum + count, 0)

    expect(reward).toMatchObject({ firstWin: true, gold: 120, progress: 5 })
    expect(reward.pack).toMatchObject({ id: 'chronicler' })
    expect(reward.pack!.cards).toHaveLength(8)
    expect(cardsAfter).toBe(cardsBefore + 8)
  })

  it('beating the boss completes the campaign and gives the exclusive card', async () => {
    await setProgress(userId, 9)

    const { dealt, record } = await winBattle(userId, deckId, 10)
    const reward = await finishBattle(userId, dealt.ticket, record, T0)
    const row = await DB.table('campaign_progress').where('userId', userId).first()

    expect(reward).toMatchObject({ firstWin: true, gold: 300, rewardCardId: 'fang-the-sabertooth', progress: 10 })
    expect(reward.pack).toMatchObject({ id: 'guardian' })
    expect((await getCollection(userId))['fang-the-sabertooth']).toBe(1)
    expect(Number(row!.completedAt)).toBe(T0)
    expect((await listCampaigns(userId)).find((campaign) => campaign.heroId === HERO)?.completed).toBe(true)
    await expect(startBattle(userId, HERO, 10, deckId, T0)).resolves.toMatchObject({ stage: 10 })
  })
})
