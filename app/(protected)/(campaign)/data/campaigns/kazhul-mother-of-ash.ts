import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Kazhul, Mother of Ash: the oldest dragon wakes up to keep the last fire of
 * time from being eaten. The story texts live in the translations
 * (campaigns.kazhul-mother-of-ash).
 */
export default defineCampaign({
  heroId: 'kazhul-mother-of-ash',
  rewardCardId: 'heart-of-the-volcano',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['scarred-raptor'] } },
    { rival: 'nysa-goldbow', cpuSetup: { allies: ['loyal-charioteer'] } },
    { rival: 'aldric-dawnkeeper', cpuSetup: { allies: ['moonlit-battlemage'] } },
    { rival: 'gideon-ironsteam', cpuSetup: { extraHealth: 5 } },
    { rival: 'ryn-voltblade', cpuSetup: { weapon: 'bloodied-glaive' }, playerSetup: { handSize: 6 } },
    { rival: 'xulthar-the-devourer' }
  ]
})
