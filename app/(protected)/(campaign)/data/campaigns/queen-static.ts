import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Queen Static: nine rivals from the other eras and Caelus the Usurper as the
 * boss. The story texts live in the translations (campaigns.queen-static).
 */
export default defineCampaign({
  heroId: 'queen-static',
  rewardCardId: 'signal-wraith',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['dire-wolf-of-the-fang'] } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['timeless-fortune-teller'] } },
    { rival: 'malachar-the-unmade', cpuSetup: { extraHealth: 5 } },
    { rival: 'morgrath-lich-abbot', cpuSetup: { weapon: 'focus-of-lightning' }, playerSetup: { handSize: 6 } },
    { rival: 'caelus-the-usurper' }
  ]
})
