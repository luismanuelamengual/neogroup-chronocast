import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * The Ash Wakes: the volcano where the oldest dragon sleeps. The story texts live in the translations
 * (campaigns.ooma-bonewhisper).
 */
export default defineCampaign({
  heroId: 'ooma-bonewhisper',
  rewardCardId: 'old-tusk',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['loyal-charioteer'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'ada-copperwick', cpuSetup: { extraHealth: 5 } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { weapon: 'lantern-staff-of-the-dawnbell' }, playerSetup: { handSize: 6 } },
    {
      rival: 'kazhul-mother-of-ash'
    }
  ]
})
