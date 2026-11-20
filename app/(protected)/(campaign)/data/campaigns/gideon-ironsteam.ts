import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Iron and Steam: a city of factories where the workers are being replaced by machines. The story texts live in the translations
 * (campaigns.gideon-ironsteam).
 */
export default defineCampaign({
  heroId: 'gideon-ironsteam',
  rewardCardId: 'ironsteam-exosuit',
  stages: [
    { rival: 'ada-copperwick' },
    { rival: 'legate-varro' },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 10 } },
    { rival: 'kora-wildfang', cpuSetup: { extraHealth: 10 } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['cog-apprentice'] } },
    { rival: 'ryn-voltblade', cpuSetup: { allies: ['neon-blade'] } },
    { rival: 'legate-varro', cpuSetup: { allies: ['legion-slinger'] } },
    { rival: 'malachar-the-unmade', cpuSetup: { extraHealth: 10 } },
    { rival: 'ilyra-starweaver', cpuSetup: { weapon: 'staff-of-embers' }, playerSetup: { handSize: 6 } },
    {
      rival: 'chancellor-brassmaw',
      deck: [
        ['brass-enforcer', 4],
        ['tax-automaton', 4],
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
        ['apprentice-wand', 2],
        ['silk-robe', 2]
      ],
      cpuSetup: { allies: ['brass-enforcer'] }
    }
  ]
})
