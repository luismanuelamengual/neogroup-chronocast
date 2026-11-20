import '@/app/(protected)/(cards)/utils/catalog'
import adaCopperwick from '@/app/(protected)/(campaign)/data/campaigns/ada-copperwick'
import aldricDawnkeeper from '@/app/(protected)/(campaign)/data/campaigns/aldric-dawnkeeper'
import gideonIronsteam from '@/app/(protected)/(campaign)/data/campaigns/gideon-ironsteam'
import ilyraStarweaver from '@/app/(protected)/(campaign)/data/campaigns/ilyra-starweaver'
import koraWildfang from '@/app/(protected)/(campaign)/data/campaigns/kora-wildfang'
import legateVarro from '@/app/(protected)/(campaign)/data/campaigns/legate-varro'
import malacharTheUnmade from '@/app/(protected)/(campaign)/data/campaigns/malachar-the-unmade'
import nysaGoldbow from '@/app/(protected)/(campaign)/data/campaigns/nysa-goldbow'
import nyxHollowsong from '@/app/(protected)/(campaign)/data/campaigns/nyx-hollowsong'
import oomaBonewhisper from '@/app/(protected)/(campaign)/data/campaigns/ooma-bonewhisper'
import rynVoltblade from '@/app/(protected)/(campaign)/data/campaigns/ryn-voltblade'
import vexNightwire from '@/app/(protected)/(campaign)/data/campaigns/vex-nightwire'
import { Campaign, CampaignStage } from '@/app/(protected)/(campaign)/models/Campaign'

/** Every campaign, by hero (docs/PLAN.md, section 13.1). A new hero adds its file here. */
export const CAMPAIGNS: Campaign[] = [
  legateVarro,
  ilyraStarweaver,
  koraWildfang,
  nysaGoldbow,
  aldricDawnkeeper,
  oomaBonewhisper,
  gideonIronsteam,
  adaCopperwick,
  vexNightwire,
  rynVoltblade,
  malacharTheUnmade,
  nyxHollowsong
]

export function findCampaign(heroId: string): Campaign | undefined {
  return CAMPAIGNS.find((campaign) => campaign.heroId === heroId)
}

export function findStage(heroId: string, stage: number): CampaignStage | undefined {
  return findCampaign(heroId)?.stages[stage - 1]
}
