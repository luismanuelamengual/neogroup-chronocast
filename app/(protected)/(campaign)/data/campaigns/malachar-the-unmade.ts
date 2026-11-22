import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Beyond the Last Hour: the hunger at the end of time that wants what is left. The story texts live in the translations
 * (campaigns.malachar-the-unmade).
 */
export default defineCampaign({
  heroId: 'malachar-the-unmade',
  rewardCardId: 'tome-of-endings',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'kora-wildfang' },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'gideon-ironsteam', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['loyal-charioteer'] } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'ada-copperwick', cpuSetup: { extraHealth: 5 } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { weapon: 'lantern-staff-of-the-dawnbell' }, playerSetup: { handSize: 6 } },
    {
      rival: 'xulthar-the-devourer'
    }
  ]
})
