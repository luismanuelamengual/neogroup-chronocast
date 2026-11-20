import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cloaking-device',
  type: 'item',
  name: 'Cloaking Device',
  text: 'An ally of yours gains +2 attack and +6 health and draw a card. Instant.',
  flavor: 'Now you see it. Now you do not.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 2, 6)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['buff', 'draw'] },
  art: {
    subject: 'a small wrist device projecting a shimmering invisibility field over its user'
  }
})
