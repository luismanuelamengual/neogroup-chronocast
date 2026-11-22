import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Legate Varro: the Ninth Legion against a Rome that never was. Rivals from
 * other eras come through the rift until the usurper Caelus shows his face.
 * The story texts live in the translations (campaigns.legate-varro).
 */
export default defineCampaign({
  heroId: 'legate-varro',
  rewardCardId: 'signifer-lucius',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver' },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
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
      rival: 'caelus-the-usurper',
      cpuSetup: {}
    }
  ]
})
