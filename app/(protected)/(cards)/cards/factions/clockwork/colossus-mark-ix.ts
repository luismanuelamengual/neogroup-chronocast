import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'colossus-mark-ix',
  type: 'ally',
  name: 'Colossus Mark IX',
  text: 'On enter: summon a Gear Drone and summon a Gear Drone.',
  flavor: 'Marks I to VIII are not talked about.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'exotic',
  price: 14000,
  cost: 8,
  attack: 30,
  health: 35,
  keywords: ['unique', 'guardian', 'shield'],
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'gear-drone')
    summonCard(ctx, ctx.owner, 'gear-drone')
  },
  ai: { value: 10, tags: ['summon', 'defense'] },
  art: {
    subject:
      'a towering steam-powered colossus robot with a glowing furnace heart, smaller drones launching from its back'
  }
})
