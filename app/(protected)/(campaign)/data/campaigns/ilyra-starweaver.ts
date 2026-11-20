import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Ilyra Starweaver: the stars are going out one by one. She follows the
 * trail of darkness across the eras up to the Hollow Astronomer. The story
 * texts live in the translations (campaigns.ilyra-starweaver).
 */
export default defineCampaign({
  heroId: 'ilyra-starweaver',
  rewardCardId: 'starweavers-astrolabe',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 10 } },
    { rival: 'kora-wildfang', cpuSetup: { extraHealth: 10 } },
    { rival: 'ilyra-starweaver', cpuSetup: { allies: ['apprentice-mage'] } },
    { rival: 'kora-wildfang', cpuSetup: { allies: ['raptor-pack'] } },
    {
      rival: 'ilyra-starweaver',
      cpuSetup: { allies: ['apprentice-mage'] }
    },
    {
      rival: 'kora-wildfang',
      cpuSetup: { extraHealth: 10 }
    },
    {
      rival: 'kora-wildfang',
      cpuSetup: { weapon: 'hunting-bow' },
      playerSetup: { handSize: 6 }
    },
    {
      rival: 'hollow-astronomer',
      deck: [
        ['void-acolyte', 4],
        ['black-comet', 2],
        ['apprentice-mage', 4],
        ['spellward-knight', 4],
        ['arcane-familiar', 4],
        ['tower-of-stars', 1],
        ['fireball', 4],
        ['frost-nova', 3],
        ['rift-guardian', 3],
        ['sky-courier', 2],
        ['chrono-golem', 2],
        ['healing-draught', 3],
        ['rift-snare', 3]
      ],
      cpuSetup: { weapon: 'staff-of-embers', extraHealth: 10 }
    }
  ]
})
