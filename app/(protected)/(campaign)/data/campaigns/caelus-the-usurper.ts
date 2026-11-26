import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Caelus the Usurper: nine rivals from the other eras and Legate Varro as the
 * boss. The story texts live in the translations (campaigns.caelus-the-usurper).
 */
export default defineCampaign({
  heroId: 'caelus-the-usurper',
  rewardCardId: 'praetor-sabina',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver' },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['timeless-fortune-teller'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['dire-wolf-of-the-fang'] } },
    { rival: 'morgrath-lich-abbot', cpuSetup: { allies: ['virus-of-the-silent-trail'] } },
    { rival: 'queen-static', cpuSetup: { extraHealth: 5 } },
    { rival: 'chancellor-brassmaw', cpuSetup: { weapon: 'pickaxe-of-borrowed-hours' }, playerSetup: { handSize: 6 } },
    { rival: 'legate-varro', cpuSetup: { weapon: 'sharp-crossbow', extraHealth: 5 } }
  ]
})
