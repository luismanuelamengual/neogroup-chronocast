import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Legate Varro: the Ninth Legion against a Rome that never was. Rivals from
 * other eras come through the rift until the usurper Caelus shows his face.
 * The story texts live in the translations (campaigns.legate-varro).
 */
export default defineCampaign({
  heroId: 'legate-varro',
  rewardCardId: 'aquila-of-the-ninth',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver' },
    { rival: 'kora-wildfang', cpuSetup: { extraHealth: 10 } },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 10 } },
    { rival: 'legate-varro', cpuSetup: { allies: ['phalanx-recruit'] } },
    { rival: 'kora-wildfang', cpuSetup: { allies: ['raptor-pack'] } },
    {
      rival: 'ilyra-starweaver',
      cpuSetup: { allies: ['spellward-knight'] }
    },
    {
      rival: 'legate-varro',
      cpuSetup: { extraHealth: 10 }
    },
    {
      rival: 'kora-wildfang',
      cpuSetup: { weapon: 'hunting-bow' },
      playerSetup: { handSize: 6 }
    },
    {
      rival: 'caelus-the-usurper',
      deck: [
        ['praetorian-guard', 2],
        ['usurpers-decree', 3],
        ['bronze-legionary', 4],
        ['phalanx-recruit', 3],
        ['arena-champion', 4],
        ['colosseum', 1],
        ['iron-gladius', 4],
        ['bronze-cuirass', 3],
        ['sky-courier', 3],
        ['chrono-golem', 3],
        ['wandering-sellsword', 4],
        ['healing-draught', 2],
        ['rift-bomb', 3]
      ],
      cpuSetup: {}
    }
  ]
})
