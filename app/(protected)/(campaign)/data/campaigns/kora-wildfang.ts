import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Kora Wildfang: nine rivals from the other eras and Ooma Bonewhisper as the
 * boss. The story texts live in the translations (campaigns.kora-wildfang).
 */
export default defineCampaign({
  heroId: 'kora-wildfang',
  rewardCardId: 'fang-the-sabertooth',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro' },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['timeless-fortune-teller'] } },
    { rival: 'queen-static', cpuSetup: { allies: ['faithful-wanderer'] } },
    { rival: 'caelus-the-usurper', cpuSetup: { allies: ['loyal-gorgon'] } },
    { rival: 'malachar-the-unmade', cpuSetup: { extraHealth: 5 } },
    { rival: 'morgrath-lich-abbot', cpuSetup: { weapon: 'focus-of-lightning' }, playerSetup: { handSize: 6 } },
    { rival: 'ooma-bonewhisper', cpuSetup: { weapon: 'scepter-of-flame', extraHealth: 5 } }
  ]
})
