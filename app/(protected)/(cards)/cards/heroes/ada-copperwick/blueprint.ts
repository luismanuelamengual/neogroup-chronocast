import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blueprint',
  type: 'ability',
  name: 'Blueprint',
  text: 'Draw 2 cards.',
  flavor: 'Version forty-two. This one will work.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'ada-copperwick' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'glowing blueprints of a complex machine unrolling on a cluttered workbench'
  }
})
