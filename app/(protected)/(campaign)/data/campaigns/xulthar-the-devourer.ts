import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Xul'thar the Devourer: after eating the stars, only time is left, and time
 * has a keeper. The story texts live in the translations (campaigns.xulthar-
 * the-devourer).
 */
export default defineCampaign({
  heroId: 'xulthar-the-devourer',
  rewardCardId: 'starving-spawn',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'ryn-voltblade', cpuSetup: { extraHealth: 5 } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { weapon: 'lantern-staff-of-the-dawnbell' }, playerSetup: { handSize: 6 } },
    { rival: 'vorhal-the-last-hour' }
  ]
})
