import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Static: the signal that is driving the megacity mad. The story texts live in the translations
 * (campaigns.ryn-voltblade).
 */
export default defineCampaign({
  heroId: 'ryn-voltblade',
  rewardCardId: 'storm-plate',
  stages: [
    { rival: 'vex-nightwire' },
    { rival: 'gideon-ironsteam' },
    { rival: 'ada-copperwick', cpuSetup: { extraHealth: 5 } },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['street-runner'] } },
    { rival: 'ilyra-starweaver', cpuSetup: { allies: ['battlemage-squire'] } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['abyssal-hound'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { extraHealth: 5 } },
    { rival: 'kora-wildfang', cpuSetup: { weapon: 'shortbow' }, playerSetup: { handSize: 6 } },
    {
      rival: 'queen-static',
      deck: [
        ['signal-storm', 4],
        ['static-wraith', 4],
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
        ['shortbow', 2],
        ['twin-hunting-knives', 2]
      ]
    }
  ]
})
