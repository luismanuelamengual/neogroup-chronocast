import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Vex Nightwire: nine rivals from the other eras and Queen Static as the
 * boss. The story texts live in the translations (campaigns.vex-nightwire).
 */
export default defineCampaign({
  heroId: 'vex-nightwire',
  rewardCardId: 'nightwire-net',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['pilgrim-of-dusk'] } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['machinist-of-brass'] } },
    { rival: 'caelus-the-usurper', cpuSetup: { allies: ['loyal-gorgon'] } },
    { rival: 'chancellor-brassmaw', cpuSetup: { extraHealth: 5 } },
    { rival: 'morgrath-lich-abbot', cpuSetup: { weapon: 'focus-of-lightning' }, playerSetup: { handSize: 6 } },
    { rival: 'queen-static', cpuSetup: { weapon: 'longbow-of-the-silent-trail', extraHealth: 5 } }
  ]
})
