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
    { rival: 'aldric-dawnkeeper', cpuSetup: { extraHealth: 5 } },
    { rival: 'kora-wildfang', cpuSetup: { allies: ['raptor-pack'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['steam-sentry'] } },
    { rival: 'legate-varro', cpuSetup: { allies: ['bronze-cohort'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { weapon: 'holo-crossbow' }, playerSetup: { handSize: 6 } },
    {
      rival: 'tauron-labyrinth-lord',
      deck: [
        ['dead-end', 4],
        ['labyrinth-guardian', 4],
        ['phalanx-recruit', 3],
        ['bronze-legionary', 3],
        ['shieldwall-veteran', 3],
        ['senator-of-coin', 2],
        ['arena-champion', 3],
        ['tribune-of-the-legion', 2],
        ['sun-chariot', 3],
        ['phalanx-general', 2],
        ['forced-march', 3],
        ['shields-up', 3],
        ['chainmail', 2],
        ['iron-gladius', 2]
      ]
    }
  ]
})
