import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Caelus the Usurper: a fake emperor goes after the oldest crown of the bronze
 * age, kept at the center of the Labyrinth. The story texts live in the
 * translations (campaigns.caelus-the-usurper).
 */
export default defineCampaign({
  heroId: 'caelus-the-usurper',
  rewardCardId: 'praetor-sabina',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['loyal-charioteer'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'ryn-voltblade', cpuSetup: { extraHealth: 5 } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { weapon: 'lantern-staff-of-the-dawnbell' }, playerSetup: { handSize: 6 } },
    { rival: 'tauron-labyrinth-lord' }
  ]
})
