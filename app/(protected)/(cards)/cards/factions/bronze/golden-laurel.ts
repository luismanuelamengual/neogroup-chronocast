import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'golden-laurel',
  type: 'item',
  name: 'Golden Laurel',
  text: 'An ally of yours gains +6 attack and +12 health and draw 2 cards.',
  flavor: 'It weighs nothing. It is worth everything.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 6, 12)
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['buff', 'draw'] },
  art: {
    subject: 'a shining golden laurel wreath floating above a velvet cushion, glowing with soft light'
  }
})
