import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Vorhal, the Last Hour: the stars are going out before their time, and
 * someone is stealing hours from the sky. The story texts live in the
 * translations (campaigns.vorhal-the-last-hour).
 */
export default defineCampaign({
  heroId: 'vorhal-the-last-hour',
  rewardCardId: 'shroud-of-the-final-bell',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'kora-wildfang' },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'ryn-voltblade', cpuSetup: { allies: ['augmented-thug'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['scarred-raptor'] } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { weapon: 'frozen-wand' }, playerSetup: { handSize: 6 } },
    { rival: 'hollow-astronomer' }
  ]
})
