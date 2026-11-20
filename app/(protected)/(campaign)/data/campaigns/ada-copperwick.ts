import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * The Machine That Dreamed: the machine she built, which decided to build itself. The story texts live in the translations
 * (campaigns.ada-copperwick).
 */
export default defineCampaign({
  heroId: 'ada-copperwick',
  rewardCardId: 'the-copperwick-engine',
  stages: [
    { rival: 'gideon-ironsteam' },
    { rival: 'ilyra-starweaver' },
    { rival: 'ryn-voltblade', cpuSetup: { extraHealth: 10 } },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 10 } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['rivet-hound'] } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['security-drone'] } },
    { rival: 'ilyra-starweaver', cpuSetup: { allies: ['tower-novice'] } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { extraHealth: 10 } },
    { rival: 'malachar-the-unmade', cpuSetup: { weapon: 'apprentice-wand' }, playerSetup: { handSize: 6 } },
    {
      rival: 'omnigear-prime',
      deck: [
        ['core-meltdown', 4],
        ['omnigear-sentinel', 4],
        ['cog-apprentice', 3],
        ['gear-drone', 3],
        ['automaton-duelist', 3],
        ['clocktower-watchman', 2],
        ['perpetual-engine', 3],
        ['master-artificer', 2],
        ['brass-behemoth', 3],
        ['clockwork-dragon', 2],
        ['overclock', 3],
        ['steam-blast', 3],
        ['chainmail', 2],
        ['iron-gladius', 2]
      ],
      cpuSetup: { allies: ['steam-sentry'], extraHealth: 10 }
    }
  ]
})
