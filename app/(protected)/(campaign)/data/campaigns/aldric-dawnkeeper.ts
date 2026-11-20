import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * The Endless Night: an abbey where the dawn stopped coming. The story texts live in the translations
 * (campaigns.aldric-dawnkeeper).
 */
export default defineCampaign({
  heroId: 'aldric-dawnkeeper',
  rewardCardId: 'the-dawn-angel',
  stages: [
    { rival: 'ilyra-starweaver' },
    { rival: 'nyx-hollowsong' },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 10 } },
    { rival: 'kora-wildfang', cpuSetup: { extraHealth: 10 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['grave-whisperer'] } },
    { rival: 'ilyra-starweaver', cpuSetup: { allies: ['rune-sprite'] } },
    { rival: 'malachar-the-unmade', cpuSetup: { allies: ['hollow-cultist'] } },
    { rival: 'ada-copperwick', cpuSetup: { extraHealth: 10 } },
    { rival: 'nysa-goldbow', cpuSetup: { weapon: 'shortbow' }, playerSetup: { handSize: 6 } },
    {
      rival: 'morgrath-lich-abbot',
      deck: [
        ['dark-sermon', 4],
        ['skeletal-monk', 4],
        ['apprentice-mage', 3],
        ['tower-novice', 3],
        ['spell-eater', 3],
        ['court-illusionist', 2],
        ['archive-guardian', 3],
        ['mirror-mage', 2],
        ['dragon-of-runes', 3],
        ['archmage-of-the-spire', 2],
        ['arcane-missiles', 3],
        ['mind-freeze', 3],
        ['apprentice-wand', 2],
        ['silk-robe', 2]
      ],
      cpuSetup: { allies: ['skeletal-monk'] }
    }
  ]
})
