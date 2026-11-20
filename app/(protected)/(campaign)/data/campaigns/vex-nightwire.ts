import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Total Surveillance: the corporate tower that watches everyone. The story texts live in the translations
 * (campaigns.vex-nightwire).
 */
export default defineCampaign({
  heroId: 'vex-nightwire',
  rewardCardId: 'nightwire-net',
  stages: [
    { rival: 'ryn-voltblade' },
    { rival: 'ada-copperwick' },
    { rival: 'gideon-ironsteam', cpuSetup: { extraHealth: 10 } },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 10 } },
    { rival: 'ryn-voltblade', cpuSetup: { allies: ['neon-blade'] } },
    { rival: 'malachar-the-unmade', cpuSetup: { allies: ['void-spawn'] } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['legion-slinger'] } },
    { rival: 'kora-wildfang', cpuSetup: { extraHealth: 10 } },
    { rival: 'legate-varro', cpuSetup: { weapon: 'war-axe' }, playerSetup: { handSize: 6 } },
    {
      rival: 'overseer-kade',
      deck: [
        ['surveillance-net', 4],
        ['syndicate-enforcer', 4],
        ['holo-decoy', 3],
        ['street-runner', 3],
        ['information-broker', 3],
        ['synth-brawler', 2],
        ['velocity-queen', 3],
        ['cyber-samurai', 2],
        ['aegis-android', 3],
        ['arc-trooper', 2],
        ['adrenaline-shot', 3],
        ['quick-hack', 3],
        ['chainmail', 2],
        ['iron-gladius', 2]
      ]
    }
  ]
})
