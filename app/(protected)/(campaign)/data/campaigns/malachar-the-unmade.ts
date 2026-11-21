import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Beyond the Last Hour: the hunger at the end of time that wants what is left. The story texts live in the translations
 * (campaigns.malachar-the-unmade).
 */
export default defineCampaign({
  heroId: 'malachar-the-unmade',
  rewardCardId: 'tome-of-endings',
  stages: [
    { rival: 'nyx-hollowsong' },
    { rival: 'ilyra-starweaver' },
    { rival: 'aldric-dawnkeeper', cpuSetup: { extraHealth: 5 } },
    { rival: 'ada-copperwick', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['grave-whisperer'] } },
    { rival: 'ryn-voltblade', cpuSetup: { allies: ['data-courier'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['cave-scout'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { extraHealth: 5 } },
    { rival: 'legate-varro', cpuSetup: { weapon: 'iron-gladius' }, playerSetup: { handSize: 6 } },
    {
      rival: 'xulthar-the-devourer',
      deck: [
        ['endless-hunger', 4],
        ['maw-of-xulthar', 4],
        ['grave-whisperer', 3],
        ['pact-keeper', 3],
        ['carrion-swarm', 3],
        ['necro-scholar', 2],
        ['soul-reaver', 3],
        ['nightmare-steed', 2],
        ['tomb-warden', 3],
        ['devourer-of-light', 2],
        ['dark-pact', 3],
        ['soul-drain', 3],
        ['oak-scepter', 2],
        ['acolyte-vestments', 2]
      ]
    }
  ]
})
