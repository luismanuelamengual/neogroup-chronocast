import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Tauron, Lord of the Labyrinth: something from another era broke through the
 * walls of the maze, and the bull goes out to hunt it. The story texts live in
 * the translations (campaigns.tauron-labyrinth-lord).
 */
export default defineCampaign({
  heroId: 'tauron-labyrinth-lord',
  rewardCardId: 'labrys-of-the-labyrinth',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 5 } },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['scarred-raptor'] } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'ryn-voltblade', cpuSetup: { weapon: 'bloodied-glaive' }, playerSetup: { handSize: 6 } },
    { rival: 'gorrak-tyrant-king' }
  ]
})
