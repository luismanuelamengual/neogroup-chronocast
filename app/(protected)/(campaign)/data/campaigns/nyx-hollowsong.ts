import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * The Last Bell: the bell that will ring the end of every era. The story texts live in the translations
 * (campaigns.nyx-hollowsong).
 */
export default defineCampaign({
  heroId: 'nyx-hollowsong',
  rewardCardId: 'the-singing-graves',
  stages: [
    { rival: 'malachar-the-unmade' },
    { rival: 'aldric-dawnkeeper' },
    { rival: 'ooma-bonewhisper', cpuSetup: { extraHealth: 10 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 10 } },
    { rival: 'malachar-the-unmade', cpuSetup: { allies: ['bone-crawler'] } },
    { rival: 'kora-wildfang', cpuSetup: { allies: ['cave-scout'] } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { allies: ['rune-sprite'] } },
    { rival: 'nysa-goldbow', cpuSetup: { extraHealth: 10 } },
    { rival: 'ryn-voltblade', cpuSetup: { weapon: 'war-axe' }, playerSetup: { handSize: 6 } },
    {
      rival: 'vorhal-the-last-hour',
      deck: [
        ['final-toll', 4],
        ['hour-wraith', 4],
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
        ['apprentice-wand', 2],
        ['silk-robe', 2]
      ]
    }
  ]
})
