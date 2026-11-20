import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'iron-rations',
  type: 'item',
  name: 'Iron Rations',
  text: 'An ally of yours gains +10 health.',
  flavor: 'Tastes like iron. Works like iron.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buff(ctx, unit, 0, 10)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: "a wrapped bundle of hard bread, dried meat and a canteen on a soldier's pack"
  }
})
