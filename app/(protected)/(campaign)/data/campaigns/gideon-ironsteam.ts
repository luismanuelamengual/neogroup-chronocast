import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Iron and Steam: a city of factories where the workers are being replaced by machines. The story texts live in the translations
 * (campaigns.gideon-ironsteam).
 */
export default defineCampaign({
  heroId: 'gideon-ironsteam',
  rewardCardId: 'ironsteam-exosuit',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang', cpuSetup: { extraHealth: 5 } },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'ada-copperwick', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'ryn-voltblade', cpuSetup: { extraHealth: 5 } },
    { rival: 'ooma-bonewhisper', cpuSetup: { weapon: 'lantern-staff-of-renewal' }, playerSetup: { handSize: 6 } },
    {
      rival: 'chancellor-brassmaw',
      cpuSetup: { allies: ['brass-steam-knight'] }
    }
  ]
})
