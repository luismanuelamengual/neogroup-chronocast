import '@/app/(protected)/(cards)/utils/catalog'
import adaCopperwick from '@/app/(protected)/(campaign)/data/campaigns/ada-copperwick'
import caelusTheUsurper from '@/app/(protected)/(campaign)/data/campaigns/caelus-the-usurper'
import chancellorBrassmaw from '@/app/(protected)/(campaign)/data/campaigns/chancellor-brassmaw'
import ilyraStarweaver from '@/app/(protected)/(campaign)/data/campaigns/ilyra-starweaver'
import koraWildfang from '@/app/(protected)/(campaign)/data/campaigns/kora-wildfang'
import legateVarro from '@/app/(protected)/(campaign)/data/campaigns/legate-varro'
import malacharTheUnmade from '@/app/(protected)/(campaign)/data/campaigns/malachar-the-unmade'
import morgrathLichAbbot from '@/app/(protected)/(campaign)/data/campaigns/morgrath-lich-abbot'
import nyxHollowsong from '@/app/(protected)/(campaign)/data/campaigns/nyx-hollowsong'
import oomaBonewhisper from '@/app/(protected)/(campaign)/data/campaigns/ooma-bonewhisper'
import queenStatic from '@/app/(protected)/(campaign)/data/campaigns/queen-static'
import vexNightwire from '@/app/(protected)/(campaign)/data/campaigns/vex-nightwire'
import { Campaign, CampaignStage } from '@/app/(protected)/(campaign)/models/Campaign'

/** Every campaign, by hero (docs/PLAN.md, section 13.1). A new hero adds its file here. */
export const CAMPAIGNS: Campaign[] = [
  legateVarro,
  ilyraStarweaver,
  koraWildfang,
  oomaBonewhisper,
  adaCopperwick,
  vexNightwire,
  malacharTheUnmade,
  nyxHollowsong,
  caelusTheUsurper,
  morgrathLichAbbot,
  chancellorBrassmaw,
  queenStatic
]

export function findCampaign(heroId: string): Campaign | undefined {
  return CAMPAIGNS.find((campaign) => campaign.heroId === heroId)
}

export function findStage(heroId: string, stage: number): CampaignStage | undefined {
  return findCampaign(heroId)?.stages[stage - 1]
}
