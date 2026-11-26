import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Ilyra Starweaver: nine rivals from the other eras and Morgrath, the Lich Abbot as the
 * boss. The story texts live in the translations (campaigns.ilyra-starweaver).
 */
export default defineCampaign({
  heroId: 'ilyra-starweaver',
  rewardCardId: 'starweavers-astrolabe',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'legate-varro' },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['timeless-fortune-teller'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['dire-wolf-of-the-fang'] } },
    { rival: 'queen-static', cpuSetup: { allies: ['midnight-mech'] } },
    { rival: 'caelus-the-usurper', cpuSetup: { extraHealth: 5 } },
    { rival: 'malachar-the-unmade', cpuSetup: { weapon: 'longbow-of-the-silent-trail' }, playerSetup: { handSize: 6 } },
    { rival: 'morgrath-lich-abbot', cpuSetup: { weapon: 'focus-of-lightning', extraHealth: 5 } }
  ]
})
