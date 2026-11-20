import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroy, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shatter-time',
  type: 'ability',
  name: 'Shatter Time',
  text: 'Destroy an enemy ally. Slow.',
  flavor: 'Some moments are better broken.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  speed: 'slow',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      destroy(ctx, unit)
    }
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a giant glass clock face shattering into glowing shards around a frozen monster'
  }
})
