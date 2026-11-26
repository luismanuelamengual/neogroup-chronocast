import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Morgrath, the Lich Abbot: a chancellor bought the land of the ruined abbey
 * to build a factory, graves included. The story texts live in the
 * translations (campaigns.morgrath-lich-abbot).
 */
export default defineCampaign({
  heroId: 'morgrath-lich-abbot',
  rewardCardId: 'brother-ossian',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['scarred-raptor'] } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { allies: ['moonlit-battlemage'] } },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { weapon: 'frozen-wand' }, playerSetup: { handSize: 6 } },
    { rival: 'chancellor-brassmaw', cpuSetup: { allies: ['brass-steam-knight'] } }
  ]
})
