import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Queen Static: an emperor from a Rome that never was wants her signal to
 * announce his coronation in every era. The story texts live in the
 * translations (campaigns.queen-static).
 */
export default defineCampaign({
  heroId: 'queen-static',
  rewardCardId: 'signal-wraith',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'kora-wildfang' },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['loyal-charioteer'] } },
    { rival: 'ryn-voltblade', cpuSetup: { allies: ['augmented-thug'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { extraHealth: 5 } },
    { rival: 'ooma-bonewhisper', cpuSetup: { weapon: 'lantern-staff-of-renewal' }, playerSetup: { handSize: 6 } },
    { rival: 'caelus-the-usurper' }
  ]
})
