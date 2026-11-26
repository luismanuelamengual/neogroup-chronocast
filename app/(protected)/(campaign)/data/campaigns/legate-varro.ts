import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Legate Varro: nine rivals from the other eras and Caelus the Usurper as the
 * boss. The story texts live in the translations (campaigns.legate-varro).
 */
export default defineCampaign({
  heroId: 'legate-varro',
  rewardCardId: 'signifer-lucius',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'kora-wildfang' },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['pilgrim-of-dusk'] } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['machinist-of-brass'] } },
    { rival: 'chancellor-brassmaw', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'malachar-the-unmade', cpuSetup: { extraHealth: 5 } },
    { rival: 'queen-static', cpuSetup: { weapon: 'longbow-of-the-silent-trail' }, playerSetup: { handSize: 6 } },
    { rival: 'caelus-the-usurper', cpuSetup: {} }
  ]
})
