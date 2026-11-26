import { defineCampaign } from '@/app/(protected)/(campaign)/utils/defineCampaign'

/**
 * Ada Copperwick: nine rivals from the other eras and Chancellor Brassmaw as the
 * boss. The story texts live in the translations (campaigns.ada-copperwick).
 */
export default defineCampaign({
  heroId: 'ada-copperwick',
  rewardCardId: 'the-copperwick-engine',
  stages: [
    { rival: 'kora-wildfang' },
    { rival: 'ilyra-starweaver' },
    { rival: 'legate-varro', cpuSetup: { extraHealth: 5 } },
    { rival: 'nyx-hollowsong', cpuSetup: { extraHealth: 5 } },
    { rival: 'vex-nightwire', cpuSetup: { allies: ['cyber-hound-of-the-grid'] } },
    { rival: 'ooma-bonewhisper', cpuSetup: { allies: ['dire-wolf-of-the-fang'] } },
    { rival: 'queen-static', cpuSetup: { allies: ['midnight-mech'] } },
    { rival: 'caelus-the-usurper', cpuSetup: { extraHealth: 5 } },
    { rival: 'malachar-the-unmade', cpuSetup: { weapon: 'longbow-of-the-silent-trail' }, playerSetup: { handSize: 6 } },
    { rival: 'chancellor-brassmaw', cpuSetup: { weapon: 'pickaxe-of-borrowed-hours', extraHealth: 5 } }
  ]
})
