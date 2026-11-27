import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, repairArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brass-bulwark',
  type: 'armor',
  subtype: 'exosuit',
  name: 'Brass Bulwark',
  text: 'At the start of each phase: if you have 3 or more artifacts, it gains +1 durability.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  armor: 1,
  durability: 4,
  onPhaseStart(ctx) {
    if (artifactCount(ctx) >= 3) {
      repairArmor(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Brass Bulwark: a heavy brass exosuit chestplate with pistons and a glowing furnace core, steampunk clockwork era style'
  }
})
