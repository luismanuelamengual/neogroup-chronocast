import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'factory-foreman',
  type: 'ally',
  name: 'Factory Foreman',
  text: 'On enter: summon a Gear Drone.',
  flavor: 'Production up, complaints down.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 60,
  cost: 4,
  attack: 13,
  health: 14,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'gear-drone')
  },
  ai: { value: 4, tags: ['summon'] },
  art: {
    subject: 'a stout foreman with a top hat and a pocket watch shouting orders in a smoky factory full of machines'
  }
})
