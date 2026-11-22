import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * The Endless Night: an abbey where the dawn stopped coming. The story texts live in the translations
 * (campaigns.aldric-dawnkeeper).
 */
export default defineCampaign({
  heroId: 'aldric-dawnkeeper',
  rewardCardId: 'the-dawn-angel',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'legate-varro' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['loyal-charioteer'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['brass-steam-knight'] } },
    { rival: 'ryn-voltblade', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { weapon: 'frozen-wand' }, playerSetup: { handSize: 6 } },
    {
      rival: 'morgrath-lich-abbot',
      cpuSetup: { allies: ['moonlit-battlemage'] }
    }
  ]
})
