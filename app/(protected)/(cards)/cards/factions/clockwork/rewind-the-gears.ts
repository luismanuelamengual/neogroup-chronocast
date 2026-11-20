import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rewind-the-gears',
  type: 'ability',
  name: 'Rewind the Gears',
  text: 'Gain 2 Chronos and draw a card. Fast.',
  flavor: 'A turn to the left gives you a minute back.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  speed: 'fast',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 2)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['ramp', 'draw'] },
  art: {
    subject: 'a huge golden key winding a giant gear backwards, clock hands spinning in reverse'
  }
})
