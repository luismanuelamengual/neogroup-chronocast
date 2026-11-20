import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'time-warp',
  type: 'ability',
  name: 'Time Warp',
  text: 'Gain 3 Chronos and draw 2 cards. Fast.',
  flavor: 'A little more time. Just a little more.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  speed: 'fast',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 3)
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['ramp', 'draw'] },
  art: {
    subject: 'a swirling vortex of clock hands and violet light bending time around a mage'
  }
})
