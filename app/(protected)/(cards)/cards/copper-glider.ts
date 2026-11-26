import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'copper-glider',
  type: 'ally',
  name: 'Copper Glider',
  text: 'When it enters: summon a Cog Drone. When it dies: summon a Cog Drone.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'legendary',
  weak: ['wind'],
  price: 2400,
  cost: 7,
  tribe: 'skyship',
  keywords: ['thorns', 'unique'],
  thorns: 5,
  attack: 6,
  health: 15,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 9, tags: ['summon'] },
  art: {
    subject:
      'Copper Glider: a glider built of carbon black with violet circuits, with piston legs, banking through the air, steampunk steam era style'
  }
})
