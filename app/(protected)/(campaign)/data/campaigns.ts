import '@/app/(protected)/(cards)/utils/catalog'
import adaCopperwick from '@/app/(protected)/(campaign)/data/campaigns/ada-copperwick'
import aldricDawnkeeper from '@/app/(protected)/(campaign)/data/campaigns/aldric-dawnkeeper'
import caelusTheUsurper from '@/app/(protected)/(campaign)/data/campaigns/caelus-the-usurper'
import chancellorBrassmaw from '@/app/(protected)/(campaign)/data/campaigns/chancellor-brassmaw'
import gideonIronsteam from '@/app/(protected)/(campaign)/data/campaigns/gideon-ironsteam'
import gorrakTyrantKing from '@/app/(protected)/(campaign)/data/campaigns/gorrak-tyrant-king'
import hollowAstronomer from '@/app/(protected)/(campaign)/data/campaigns/hollow-astronomer'
import ilyraStarweaver from '@/app/(protected)/(campaign)/data/campaigns/ilyra-starweaver'
import kazhulMotherOfAsh from '@/app/(protected)/(campaign)/data/campaigns/kazhul-mother-of-ash'
import koraWildfang from '@/app/(protected)/(campaign)/data/campaigns/kora-wildfang'
import legateVarro from '@/app/(protected)/(campaign)/data/campaigns/legate-varro'
import malacharTheUnmade from '@/app/(protected)/(campaign)/data/campaigns/malachar-the-unmade'
import morgrathLichAbbot from '@/app/(protected)/(campaign)/data/campaigns/morgrath-lich-abbot'
import nysaGoldbow from '@/app/(protected)/(campaign)/data/campaigns/nysa-goldbow'
import nyxHollowsong from '@/app/(protected)/(campaign)/data/campaigns/nyx-hollowsong'
import omnigearPrime from '@/app/(protected)/(campaign)/data/campaigns/omnigear-prime'
import oomaBonewhisper from '@/app/(protected)/(campaign)/data/campaigns/ooma-bonewhisper'
import overseerKade from '@/app/(protected)/(campaign)/data/campaigns/overseer-kade'
import queenStatic from '@/app/(protected)/(campaign)/data/campaigns/queen-static'
import rynVoltblade from '@/app/(protected)/(campaign)/data/campaigns/ryn-voltblade'
import tauronLabyrinthLord from '@/app/(protected)/(campaign)/data/campaigns/tauron-labyrinth-lord'
import vexNightwire from '@/app/(protected)/(campaign)/data/campaigns/vex-nightwire'
import vorhalTheLastHour from '@/app/(protected)/(campaign)/data/campaigns/vorhal-the-last-hour'
import xultharTheDevourer from '@/app/(protected)/(campaign)/data/campaigns/xulthar-the-devourer'
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
  nyxHollowsong,
  caelusTheUsurper,
  tauronLabyrinthLord,
  gorrakTyrantKing,
  kazhulMotherOfAsh,
  xultharTheDevourer,
  vorhalTheLastHour,
  hollowAstronomer,
  morgrathLichAbbot,
  chancellorBrassmaw,
  omnigearPrime,
  overseerKade,
  queenStatic
]

export function findCampaign(heroId: string): Campaign | undefined {
  return CAMPAIGNS.find((campaign) => campaign.heroId === heroId)
}

export function findStage(heroId: string, stage: number): CampaignStage | undefined {
  return findCampaign(heroId)?.stages[stage - 1]
}
