import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Chancellor Brassmaw: nine rivals from the other eras and Ada Copperwick as the
 * boss. The story texts live in the translations (campaigns.chancellor-brassmaw).
 */
export default defineCampaign({
  heroId: 'chancellor-brassmaw',
  rewardCardId: 'hostile-takeover',
  stages: [
    { rival: 'legate-varro' },
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { allies: ['bone-knight-of-the-void'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['dire-wolf-of-the-fang'] } },
    { rival: 'malachar-the-unmade', cpuSetup: { allies: ['timeless-fortune-teller'] } },
    { rival: 'queen-static', cpuSetup: { extraHealth: 5 } },
    { rival: 'caelus-the-usurper', cpuSetup: { weapon: 'bloodied-glaive' }, playerSetup: { handSize: 6 } },
    { rival: 'ada-copperwick', cpuSetup: { weapon: 'frozen-wand', extraHealth: 5 } }
  ]
})
