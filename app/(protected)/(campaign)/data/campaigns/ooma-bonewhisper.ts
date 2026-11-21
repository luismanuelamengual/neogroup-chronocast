import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * The Ash Wakes: the volcano where the oldest dragon sleeps. The story texts live in the translations
 * (campaigns.ooma-bonewhisper).
 */
export default defineCampaign({
  heroId: 'ooma-bonewhisper',
  rewardCardId: 'old-tusk',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'nysa-goldbow' },
    { rival: 'aldric-dawnkeeper', cpuSetup: { extraHealth: 5 } },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'kora-wildfang', cpuSetup: { allies: ['tusked-hog'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { allies: ['cog-apprentice'] } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-crawler'] } },
    { rival: 'ryn-voltblade', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { weapon: 'holo-crossbow' }, playerSetup: { handSize: 6 } },
    {
      rival: 'kazhul-mother-of-ash',
      deck: [
        ['ash-drake', 4],
        ['eruption', 4],
        ['dino-hatchling', 3],
        ['cave-scout', 3],
        ['herd-mother', 3],
        ['bone-carver', 2],
        ['mossback-tortoise', 3],
        ['raptor-alpha', 2],
        ['triceratops-matriarch', 3],
        ['thunder-lizard', 2],
        ['feral-growth', 3],
        ['primal-rage', 3],
        ['shortbow', 2],
        ['twin-hunting-knives', 2]
      ]
    }
  ]
})
