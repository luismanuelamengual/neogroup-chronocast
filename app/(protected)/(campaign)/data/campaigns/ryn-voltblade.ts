import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Static: the signal that is driving the megacity mad. The story texts live in the translations
 * (campaigns.ryn-voltblade).
 */
export default defineCampaign({
  heroId: 'ryn-voltblade',
  rewardCardId: 'storm-plate',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang', cpuSetup: { extraHealth: 5 } },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { extraHealth: 5 } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { weapon: 'lantern-staff-of-the-dawnbell' }, playerSetup: { handSize: 6 } },
    {
      rival: 'queen-static'
    }
  ]
})
