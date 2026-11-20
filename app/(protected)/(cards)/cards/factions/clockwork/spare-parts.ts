import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spare-parts',
  type: 'item',
  name: 'Spare Parts',
  text: 'An ally of yours heals 10 and it gains +1 attack.',
  flavor: 'A bolt here, a spring there. Good as new.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 45,
  cost: 1,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    heal(ctx, ctx.targets[0], 10)
    buffAt(ctx, ctx.targets[0], 1, 0)
  },
  ai: { value: 1, tags: ['heal', 'buff'] },
  art: {
    subject: 'a wooden crate overflowing with bolts, springs, gears and a small oil can'
  }
})
