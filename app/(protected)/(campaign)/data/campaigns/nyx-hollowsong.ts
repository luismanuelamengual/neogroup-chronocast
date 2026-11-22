import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * The Last Bell: the bell that will ring the end of every era. The story texts live in the translations
 * (campaigns.nyx-hollowsong).
 */
export default defineCampaign({
  heroId: 'nyx-hollowsong',
  rewardCardId: 'echo-the-spirit-crow',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'gideon-ironsteam', cpuSetup: { extraHealth: 5 } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['loyal-charioteer'] } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { allies: ['moonlit-battlemage'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { weapon: 'frozen-wand' }, playerSetup: { handSize: 6 } },
    {
      rival: 'vorhal-the-last-hour'
    }
  ]
})
