import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Chancellor Brassmaw: his greatest machine took over the foundry and decided
 * it no longer needs owners. The story texts live in the translations
 * (campaigns.chancellor-brassmaw).
 */
export default defineCampaign({
  heroId: 'chancellor-brassmaw',
  rewardCardId: 'hostile-takeover',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 5 } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'ryn-voltblade', cpuSetup: { extraHealth: 5 } },
    { rival: 'ooma-bonewhisper', cpuSetup: { weapon: 'lantern-staff-of-renewal' }, playerSetup: { handSize: 6 } },
    { rival: 'omnigear-prime', cpuSetup: { allies: ['brass-steam-knight'], extraHealth: 5 } }
  ]
})
