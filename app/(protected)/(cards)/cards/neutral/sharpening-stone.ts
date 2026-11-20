import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sharpening-stone',
  type: 'item',
  name: 'Sharpening Stone',
  text: 'An ally of yours gains +4 attack.',
  flavor: 'Every edge can be sharper.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 45,
  cost: 1,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buff(ctx, unit, 4, 0)
    }
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject: 'a whetstone sharpening a gleaming sword blade with sparks flying'
  }
})
