import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Gorrak, Tyrant King: the volcano woke up and the jungle is burning, and a
 * king does not let anyone burn his kingdom. The story texts live in the
 * translations (campaigns.gorrak-tyrant-king).
 */
export default defineCampaign({
  heroId: 'gorrak-tyrant-king',
  rewardCardId: 'maw-the-elder-rex',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang', cpuSetup: { extraHealth: 5 } },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['scarred-raptor'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { weapon: 'frozen-wand' }, playerSetup: { handSize: 6 } },
    { rival: 'kazhul-mother-of-ash', cpuSetup: { extraHealth: 5 } }
  ]
})
