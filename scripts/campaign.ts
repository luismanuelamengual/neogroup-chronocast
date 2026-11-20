/* eslint-disable no-console */
/**
 * Balance of the campaigns (docs/PLAN.md, section 16): how often a typical
 * player (the hero's basic deck, played by the computer at level 3) wins
 * each battle of a campaign. The curve should go down from battle 1 to the
 * boss.
 *
 * Usage: yarn campaign                    (every campaign, 40 matches per battle)
 *        yarn campaign <hero-id> [matches] [player level]
 */
import { CAMPAIGNS, findCampaign } from '@/app/(protected)/(campaign)/data/campaigns'
import { Campaign } from '@/app/(protected)/(campaign)/models/Campaign'
import { CPU, createCampaignMatch, PLAYER } from '@/app/(protected)/(campaign)/utils/playCampaign'
import { basicDeck } from '@/app/(protected)/(cards)/data/heroDecks'
import { chooseTimeline } from '@/app/(protected)/(engine)/ai/chooseTimeline'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'

function simulate(campaign: Campaign, matches: number, playerLevel: number): void {
  const deck = basicDeck(campaign.heroId)

  console.log(`${campaign.heroId} (player at level ${playerLevel}, ${matches} matches per battle)`)

  for (const stage of campaign.stages) {
    let wins = 0
    let phases = 0

    for (let seed = 1; seed <= matches; seed++) {
      let state = createCampaignMatch(stage, deck, seed * 7919)

      while (state.status === 'planning') {
        state = resolvePhase(state, {
          a: chooseTimeline(state, PLAYER, playerLevel),
          b: chooseTimeline(state, CPU, stage.aiLevel)
        }).state
      }

      wins += state.result?.winner === PLAYER ? 1 : 0
      phases += state.phase
    }

    const bar = '█'.repeat(Math.round((wins / matches) * 20)).padEnd(20, '·')

    console.log(
      `  ${String(stage.number).padStart(2)} ${stage.rival.padEnd(20)} level ${stage.aiLevel}  ${bar} ` +
        `${String(Math.round((wins / matches) * 100)).padStart(3)}%  phases ${(phases / matches).toFixed(1)}`
    )
  }
}

if (require.main === module) {
  const [heroId, count, level] = process.argv.slice(2)
  const matches = Number(count) || 40
  const playerLevel = Number(level) || 3

  if (heroId) {
    const campaign = findCampaign(heroId)

    if (!campaign) {
      console.error(`No campaign for "${heroId}". Campaigns: ${CAMPAIGNS.map((item) => item.heroId).join(', ')}`)
      process.exit(1)
    }

    simulate(campaign, matches, playerLevel)
  } else {
    CAMPAIGNS.forEach((campaign) => simulate(campaign, matches, playerLevel))
  }
}
