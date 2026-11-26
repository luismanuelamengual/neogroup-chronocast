import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rusty-sabotage',
  type: 'ability',
  name: 'Rusty Sabotage',
  text: 'The enemy armor loses 3 durability. Fast.',
  flavor: 'A little water in the gears goes a long way.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 180,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearArmor(ctx, ctx.opponent, 3)
  },
  ai: { value: 2, tags: ['antiArmor'] },
  art: {
    subject:
      'Rusty Sabotage: a sword and a shield cracking and rusting apart, over burning grassland, close-up filling the frame, turquoise accents, steampunk steam era style'
  }
})
