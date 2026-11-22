import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * The Machine That Dreamed: the machine she built, which decided to build itself. The story texts live in the translations
 * (campaigns.ada-copperwick).
 */
export default defineCampaign({
  heroId: 'ada-copperwick',
  rewardCardId: 'the-copperwick-engine',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'legate-varro' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['loyal-charioteer'] } },
    { rival: 'ryn-voltblade', cpuSetup: { extraHealth: 5 } },
    { rival: 'ooma-bonewhisper', cpuSetup: { weapon: 'lantern-staff-of-renewal' }, playerSetup: { handSize: 6 } },
    {
      rival: 'omnigear-prime',
      cpuSetup: { allies: ['brass-steam-knight'], extraHealth: 5 }
    }
  ]
})
