import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Ooma Bonewhisper: nine rivals from the other eras and Kora Wildfang as the
 * boss. The story texts live in the translations (campaigns.ooma-bonewhisper).
 */
export default defineCampaign({
  heroId: 'ooma-bonewhisper',
  rewardCardId: 'old-tusk',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'ilyra-starweaver' },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['timeless-fortune-teller'] } },
    { rival: 'malachar-the-unmade', cpuSetup: { allies: ['crawler-of-the-grave'] } },
    { rival: 'queen-static', cpuSetup: { allies: ['midnight-mech'] } },
    { rival: 'caelus-the-usurper', cpuSetup: { extraHealth: 5 } },
    { rival: 'chancellor-brassmaw', cpuSetup: { weapon: 'pickaxe-of-borrowed-hours' }, playerSetup: { handSize: 6 } },
    { rival: 'kora-wildfang', cpuSetup: { weapon: 'keen-eyed-crossbow', extraHealth: 5 } }
  ]
})
