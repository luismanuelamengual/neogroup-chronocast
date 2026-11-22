import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * The Shifting Labyrinth: a maze that moves between the eras, and the beast at its center. The story texts live in the translations
 * (campaigns.nysa-goldbow).
 */
export default defineCampaign({
  heroId: 'nysa-goldbow',
  rewardCardId: 'argos-the-silver-hound',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'legate-varro' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { extraHealth: 5 } },
    { rival: 'ryn-voltblade', cpuSetup: { weapon: 'bloodied-glaive' }, playerSetup: { handSize: 6 } },
    {
      rival: 'tauron-labyrinth-lord'
    }
  ]
})
