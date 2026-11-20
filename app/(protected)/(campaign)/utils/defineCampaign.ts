import { STAGE_RULES, STAGES_PER_CAMPAIGN } from '@/app/(protected)/(campaign)/data/difficulty'
import { Campaign, StageDefinition } from '@/app/(protected)/(campaign)/models/Campaign'
import { listDeck, poolDeck } from '@/app/(protected)/(campaign)/utils/cpuDeck'
import { basicDeck, hasBasicDeck } from '@/app/(protected)/(cards)/data/heroDecks'

/**
 * Declares a hero's campaign (one file per hero in data/campaigns/): its 10
 * battles get the rules of data/difficulty.ts. A battle without its own deck
 * gets one: up to battle 4 at random within the stage's rarity, from battle 5
 * the rival's basic deck (data/heroDecks.ts: its starter, or a themed one).
 */
export function defineCampaign(definition: {
  heroId: string
  rewardCardId: string
  stages: StageDefinition[]
}): Campaign {
  if (definition.stages.length !== STAGES_PER_CAMPAIGN) {
    throw new Error(`Campaign "${definition.heroId}": it needs ${STAGES_PER_CAMPAIGN} battles`)
  }

  return {
    heroId: definition.heroId,
    rewardCardId: definition.rewardCardId,
    stages: definition.stages.map((stage, index) => {
      const rules = STAGE_RULES[index]
      const number = index + 1
      const cpuDeck = stage.deck
        ? listDeck(stage.rival, stage.deck)
        : number <= 4 || !hasBasicDeck(stage.rival)
          ? poolDeck(stage.rival, rules.maxRarity, number * 101 + definition.heroId.length)
          : basicDeck(stage.rival)

      return {
        number,
        rival: stage.rival,
        cpuDeck,
        aiLevel: rules.aiLevel,
        cpuSetup: stage.cpuSetup ?? {},
        playerSetup: stage.playerSetup ?? {},
        gold: rules.gold,
        pack: rules.pack,
        boss: number === STAGES_PER_CAMPAIGN
      }
    })
  }
}
