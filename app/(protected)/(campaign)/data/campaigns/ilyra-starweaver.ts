import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Ilyra Starweaver: the stars are going out one by one. She follows the
 * trail of darkness across the eras up to the Hollow Astronomer. The story
 * texts live in the translations (campaigns.ilyra-starweaver).
 */
export default defineCampaign({
  heroId: 'ilyra-starweaver',
  rewardCardId: 'starweavers-astrolabe',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['loyal-charioteer'] } },
    {
      rival: 'ada-copperwick',
      cpuSetup: { allies: ['brass-steam-knight'] }
    },
    {
      rival: 'ooma-bonewhisper',
      cpuSetup: { extraHealth: 5 }
    },
    {
      rival: 'ryn-voltblade',
      cpuSetup: { weapon: 'bloodied-glaive' },
      playerSetup: { handSize: 6 }
    },
    {
      rival: 'hollow-astronomer',
      cpuSetup: { weapon: 'frozen-wand', extraHealth: 5 }
    }
  ]
})
