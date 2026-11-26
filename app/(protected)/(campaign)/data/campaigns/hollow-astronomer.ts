import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * The Hollow Astronomer: one black star he cannot put out rises over a ruined
 * abbey. The story texts live in the translations (campaigns.hollow-
 * astronomer).
 */
export default defineCampaign({
  heroId: 'hollow-astronomer',
  rewardCardId: 'the-dying-star',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'legate-varro' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['loyal-charioteer'] } },
    { rival: 'ryn-voltblade', cpuSetup: { allies: ['augmented-thug'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { extraHealth: 5 } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { weapon: 'lantern-staff-of-the-dawnbell' }, playerSetup: { handSize: 6 } },
    { rival: 'morgrath-lich-abbot' }
  ]
})
