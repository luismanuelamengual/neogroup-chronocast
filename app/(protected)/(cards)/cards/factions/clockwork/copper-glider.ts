import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'copper-glider',
  type: 'ally',
  name: 'Copper Glider',
  text: 'When it enters: summon a Cog Drone. When it dies: summon a Cog Drone.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'legendary',
  weak: ['wind'],
  price: 6000,
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
    subject: 'a steampunk flying machine, the copper glider, mid-leap, steampunk steam era style'
  }
})
