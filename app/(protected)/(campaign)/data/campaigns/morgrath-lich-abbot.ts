import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Morgrath, the Lich Abbot: nine rivals from the other eras and Chancellor Brassmaw as the
 * boss. The story texts live in the translations (campaigns.morgrath-lich-abbot).
 */
export default defineCampaign({
  heroId: 'morgrath-lich-abbot',
  rewardCardId: 'brother-ossian',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['dire-wolf-of-the-fang'] } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['timeless-fortune-teller'] } },
    { rival: 'queen-static', cpuSetup: { extraHealth: 5 } },
    { rival: 'caelus-the-usurper', cpuSetup: { weapon: 'warpick-of-the-warlord' }, playerSetup: { handSize: 6 } },
    { rival: 'chancellor-brassmaw', cpuSetup: { allies: ['brass-steam-knight'] } }
  ]
})
