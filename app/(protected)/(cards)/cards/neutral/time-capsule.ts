import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'time-capsule',
  type: 'item',
  name: 'Time Capsule',
  text: 'Draw 3 cards. Slow.',
  flavor: 'Buried in the past, opened just in time.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1700,
  cost: 3,
  speed: 'slow',
  onPlay(ctx) {
    draw(ctx, ctx.owner, 3)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'an old metal capsule being dug up, glowing light spilling out of its open lid'
  }
})
