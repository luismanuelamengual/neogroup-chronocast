import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Total Surveillance: the corporate tower that watches everyone. The story texts live in the translations
 * (campaigns.vex-nightwire).
 */
export default defineCampaign({
  heroId: 'vex-nightwire',
  rewardCardId: 'nightwire-net',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'ryn-voltblade', cpuSetup: { allies: ['augmented-thug'] } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { extraHealth: 5 } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { weapon: 'lantern-staff-of-the-dawnbell' }, playerSetup: { handSize: 6 } },
    {
      rival: 'overseer-kade'
    }
  ]
})
