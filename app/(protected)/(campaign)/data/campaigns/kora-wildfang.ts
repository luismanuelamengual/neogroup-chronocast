import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Kora Wildfang: something is hunting the hunters. From the jungle to the
 * other eras and back, up to Gorrak, the Tyrant King. The story texts live in
 * the translations (campaigns.kora-wildfang).
 */
export default defineCampaign({
  heroId: 'kora-wildfang',
  rewardCardId: 'fang-the-sabertooth',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro' },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { allies: ['moonlit-battlemage'] } },
    {
      rival: 'ooma-bonewhisper',
      cpuSetup: { allies: ['scarred-raptor'] }
    },
    {
      rival: 'ryn-voltblade',
      cpuSetup: { extraHealth: 5 }
    },
    {
      rival: 'ada-copperwick',
      cpuSetup: { weapon: 'frozen-wand' },
      playerSetup: { handSize: 6 }
    },
    {
      rival: 'gorrak-tyrant-king',
      cpuSetup: {}
    }
  ]
})
