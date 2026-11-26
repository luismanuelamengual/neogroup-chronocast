import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Malachar the Unmade: nine rivals from the other eras and Nyx Hollowsong as the
 * boss. The story texts live in the translations (campaigns.malachar-the-unmade).
 */
export default defineCampaign({
  heroId: 'malachar-the-unmade',
  rewardCardId: 'tome-of-endings',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['timeless-fortune-teller'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['dire-wolf-of-the-fang'] } },
    { rival: 'morgrath-lich-abbot', cpuSetup: { allies: ['virus-of-the-silent-trail'] } },
    { rival: 'caelus-the-usurper', cpuSetup: { extraHealth: 5 } },
    { rival: 'chancellor-brassmaw', cpuSetup: { weapon: 'scepter-of-flame' }, playerSetup: { handSize: 6 } },
    { rival: 'nyx-hollowsong', cpuSetup: { weapon: 'lantern-staff-of-renewal', extraHealth: 5 } }
  ]
})
