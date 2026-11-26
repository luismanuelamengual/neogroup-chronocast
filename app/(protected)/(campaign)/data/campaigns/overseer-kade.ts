import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Overseer Kade: there is one corner of the network where his cameras only
 * show static. The story texts live in the translations (campaigns.overseer-
 * kade).
 */
export default defineCampaign({
  heroId: 'overseer-kade',
  rewardCardId: 'panopticon-feed',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'legate-varro' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 5 } },
    { rival: 'ryn-voltblade', cpuSetup: { allies: ['augmented-thug'] } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { extraHealth: 5 } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { weapon: 'lantern-staff-of-the-dawnbell' }, playerSetup: { handSize: 6 } },
    { rival: 'queen-static' }
  ]
})
