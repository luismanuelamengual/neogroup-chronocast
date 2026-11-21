import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Kora Wildfang: something is hunting the hunters. From the jungle to the
 * other eras and back, up to Gorrak, the Tyrant King. The story texts live in
 * the translations (campaigns.kora-wildfang).
 */
export default defineCampaign({
  heroId: 'kora-wildfang',
  rewardCardId: 'fang-the-sabertooth',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'kora-wildfang', cpuSetup: { allies: ['raptor-pack'] } },
    { rival: 'ilyra-starweaver', cpuSetup: { allies: ['apprentice-mage'] } },
    {
      rival: 'ilyra-starweaver',
      cpuSetup: { allies: ['apprentice-mage'] }
    },
    {
      rival: 'kora-wildfang',
      cpuSetup: { extraHealth: 5 }
    },
    {
      rival: 'kora-wildfang',
      cpuSetup: { weapon: 'hunting-bow' },
      playerSetup: { handSize: 6 }
    },
    {
      rival: 'gorrak-tyrant-king',
      deck: [
        ['tyrant-hatchling', 4],
        ['primal-roar', 3],
        ['raptor-pack', 4],
        ['thornback-boar', 4],
        ['elder-mammoth', 3],
        ['primal-grove', 1],
        ['hunting-bow', 3],
        ['snare-trap', 3],
        ['rift-guardian', 2],
        ['wandering-sellsword', 3],
        ['chrono-golem', 2],
        ['rift-scavenger', 3],
        ['rift-bomb', 4]
      ],
      cpuSetup: {}
    }
  ]
})
