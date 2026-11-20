import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'philosophers-hourglass',
  type: 'item',
  name: "Philosopher's Hourglass",
  text: 'Gain 4 Chronos and draw a card. Fast.',
  flavor: 'Turn it over, and the hour is yours.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 5000,
  cost: 4,
  speed: 'fast',
  keywords: ['unique'],
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 4)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['ramp', 'draw'] },
  art: {
    subject: "a golden hourglass with sand made of tiny stars, levitating above an alchemist's table"
  }
})
