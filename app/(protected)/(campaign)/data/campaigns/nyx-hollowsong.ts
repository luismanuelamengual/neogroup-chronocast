import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Nyx Hollowsong: nine rivals from the other eras and Malachar the Unmade as the
 * boss. The story texts live in the translations (campaigns.nyx-hollowsong).
 */
export default defineCampaign({
  heroId: 'nyx-hollowsong',
  rewardCardId: 'echo-the-spirit-crow',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['timeless-fortune-teller'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['dire-wolf-of-the-fang'] } },
    { rival: 'morgrath-lich-abbot', cpuSetup: { allies: ['virus-of-the-silent-trail'] } },
    { rival: 'queen-static', cpuSetup: { extraHealth: 5 } },
    { rival: 'chancellor-brassmaw', cpuSetup: { weapon: 'pickaxe-of-borrowed-hours' }, playerSetup: { handSize: 6 } },
    { rival: 'malachar-the-unmade', cpuSetup: { weapon: 'longbow-of-the-silent-trail', extraHealth: 5 } }
  ]
})
