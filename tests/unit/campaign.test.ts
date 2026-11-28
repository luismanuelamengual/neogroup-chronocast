import { describe, expect, it } from 'vitest'
import { CAMPAIGNS } from '@/app/(protected)/(campaign)/data/campaigns'
import { STAGES_PER_CAMPAIGN } from '@/app/(protected)/(campaign)/data/difficulty'
import { poolDeck } from '@/app/(protected)/(campaign)/utils/cpuDeck'
import { BattleRecord, createCampaignMatch, replayCampaign } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { stageKey, storyKey } from '@/app/(protected)/(campaign)/utils/storyKey'
import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import { chooseTimeline } from '@/app/(protected)/(engine)/ai/chooseTimeline'
import { AI_LEVELS } from '@/app/(protected)/(engine)/ai/levels'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { createMatch, mulligan } from '@/app/(protected)/(engine)/utils/createMatch'
import { canUseCard, validateDeck } from '@/app/(protected)/(engine)/utils/deckRules'
import { projectTimeline } from '@/app/(protected)/(engine)/utils/projectTimeline'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { findPack } from '@/app/(protected)/(shop)/data/packs'
import { createTranslator } from '@/app/i18n/translate'

function duel(levelA: number, levelB: number, seed: number): MatchState {
  const heroA = STARTER_HERO_IDS[seed % 3]
  const heroB = STARTER_HERO_IDS[(seed + 1) % 3]
  let { state } = createMatch({ seed, decks: { a: starterDeck(heroA), b: starterDeck(heroB) } })

  while (state.status === 'planning') {
    state = resolvePhase(state, { a: chooseTimeline(state, 'a', levelA), b: chooseTimeline(state, 'b', levelB) }).state
  }

  return state
}

describe('the computer player by levels', () => {
  it('every level plans 6 actions that never fail on their own, and always the same', () => {
    let { state } = createMatch({ seed: 3, decks: { a: starterDeck('legate-varro'), b: starterDeck('kora-wildfang') } })

    for (let phase = 0; phase < 4 && state.status === 'planning'; phase++) {
      for (const { level } of AI_LEVELS) {
        const timeline = chooseTimeline(state, 'a', level)

        expect(timeline).toHaveLength(6)
        expect(projectTimeline(state, 'a', timeline).failures, `level ${level}`).toEqual([])
        expect(chooseTimeline(structuredClone(state), 'a', level)).toEqual(timeline)
      }

      state = resolvePhase(state, { a: chooseTimeline(state, 'a', 3), b: chooseTimeline(state, 'b', 3) }).state
    }
  })

  it('looking two phases ahead beats the greedy computer', () => {
    let wins = 0
    const matches = 24

    for (let seed = 1; seed <= matches; seed++) {
      // Half of the matches on each side.
      const state = seed % 2 ? duel(5, 1, seed) : duel(1, 5, seed)

      wins += state.result?.winner === (seed % 2 ? 'a' : 'b') ? 1 : 0
    }

    expect(wins).toBeGreaterThan(matches * 0.6)
  })
})

describe('the campaigns', () => {
  const es = createTranslator('es')
  const en = createTranslator('en')

  it('one per hero, with 10 battles against 10 different heroes, the boss last, and an exclusive card for the hero', () => {
    const heroIds = HEROES.map((hero) => hero.id)

    expect(CAMPAIGNS.map((campaign) => campaign.heroId).sort()).toEqual([...heroIds].sort())

    for (const campaign of CAMPAIGNS) {
      const reward = getCard(campaign.rewardCardId)

      expect(campaign.stages).toHaveLength(STAGES_PER_CAMPAIGN)
      expect(reward.reward, reward.id).toBe(true)
      expect(reward.restriction).toEqual({ heroes: [campaign.heroId] })
      expect(heroIds, campaign.heroId).toContain(campaign.heroId)
      expect(new Set(campaign.stages.map((stage) => stage.rival)).size, campaign.heroId).toBe(STAGES_PER_CAMPAIGN)
      expect(
        campaign.stages.map((stage) => stage.rival),
        campaign.heroId
      ).not.toContain(campaign.heroId)
      expect(campaign.stages.filter((stage) => stage.boss).map((stage) => stage.number)).toEqual([10])
    }
  })

  it('every computer deck is legal for its hero, and so are the cards it starts with', () => {
    for (const campaign of CAMPAIGNS) {
      for (const stage of campaign.stages) {
        const label = `${campaign.heroId} ${stage.number}`
        const hero = getCard(stage.cpuDeck.heroId)
        const setupCards = [stage.cpuSetup.location, stage.cpuSetup.weapon, stage.cpuSetup.armor]
          .concat(stage.cpuSetup.allies ?? [])
          .filter((id): id is string => !!id)

        expect(validateDeck(stage.cpuDeck), label).toEqual([])
        expect(
          stage.cpuDeck.cards.some((id) => getCard(id).reward),
          label
        ).toBe(false)

        for (const id of setupCards) {
          expect(canUseCard(hero, getCard(id)), `${label}: ${id}`).toBe(true)
        }
      }
    }
  })

  it('the difficulty and the gold go up, and battles 5 and 10 give a pack', () => {
    for (const campaign of CAMPAIGNS) {
      const levels = campaign.stages.map((stage) => stage.aiLevel)
      const gold = campaign.stages.map((stage) => stage.gold)

      expect(levels).toEqual([...levels].sort((a, b) => a - b))
      expect(gold).toEqual([...gold].sort((a, b) => a - b))
      expect(gold[0]).toBe(75)
      expect(gold[9]).toBe(450)
      expect(campaign.stages.filter((stage) => stage.pack).map((stage) => stage.number)).toEqual([5, 10])
      campaign.stages.forEach((stage) => stage.pack && expect(findPack(stage.pack)).toBeDefined())
    }
  })

  it('every story text is translated', () => {
    for (const campaign of CAMPAIGNS) {
      for (const t of [es, en]) {
        for (const part of ['title', 'intro', 'ending'] as const) {
          expect(t(storyKey(campaign.heroId, part))).not.toBe(storyKey(campaign.heroId, part))
        }

        for (const stage of campaign.stages) {
          for (const part of ['name', 'text'] as const) {
            expect(t(stageKey(campaign.heroId, stage.number, part))).not.toBe(
              stageKey(campaign.heroId, stage.number, part)
            )
          }
        }
      }
    }
  })

  it('a random deck is the same for the same seed', () => {
    expect(poolDeck('kora-wildfang', 'common', 7)).toEqual(poolDeck('kora-wildfang', 'common', 7))
    expect(validateDeck(poolDeck('kora-wildfang', 'common', 7))).toEqual([])
  })

  it('the replay of a battle ends exactly as it was played, and a changed record does not', () => {
    const stage = CAMPAIGNS[0].stages[3]
    const deck = starterDeck('legate-varro')
    const seed = 4242
    let live = createCampaignMatch(stage, deck, seed)
    const record: BattleRecord = { mulligan: [live.players.a.hand[0].uid], timelines: [] }

    // As the browser plays it: the player's timelines recorded, the computer's chosen by its level.
    live = mulligan(live, 'a', record.mulligan)

    while (live.status === 'planning') {
      const timeline = chooseTimeline(live, 'a', 4)

      record.timelines.push(timeline)
      live = resolvePhase(live, { a: timeline, b: chooseTimeline(live, 'b', stage.aiLevel) }).state
    }

    const replayed = replayCampaign(stage, deck, seed, record)

    expect(replayed?.result).toEqual(live.result)
    expect(replayed?.phase).toBe(live.phase)
    expect(replayCampaign(stage, deck, seed, { ...record, timelines: record.timelines.slice(0, -1) })).toBeNull()
    expect(replayCampaign(stage, deck, seed + 1, record)?.players).not.toEqual(live.players)
  })
})
