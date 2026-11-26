import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Omnigear Prime: the machine that builds machines sees a megacity of the
 * future through a rift, and wants its factory. The story texts live in the
 * translations (campaigns.omnigear-prime).
 */
export default defineCampaign({
  heroId: 'omnigear-prime',
  rewardCardId: 'prototype-zero',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'ilyra-starweaver' },
    { rival: 'kora-wildfang', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { extraHealth: 5 } },
    { rival: 'ryn-voltblade', cpuSetup: { weapon: 'bloodied-glaive' }, playerSetup: { handSize: 6 } },
    { rival: 'overseer-kade' }
  ]
})
