import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'track',
  type: 'ability',
  name: 'Track',
  text: 'Draw a card. Fast.',
  flavor: 'Broken twigs, bent grass, fresh tracks.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'fast',
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['draw'] },
  art: {
    subject: 'a hunter kneeling and studying fresh animal tracks in the mud of a forest'
  }
})
