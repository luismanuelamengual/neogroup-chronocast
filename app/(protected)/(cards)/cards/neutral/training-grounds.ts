import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'training-grounds',
  type: 'artifact',
  name: 'Training Grounds',
  text: 'Artifact. At the start of each phase, a random ally of yours gains +2 attack.',
  flavor: 'Practice makes timeless.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  onPhaseStart(ctx) {
    const unit = randomAlly(ctx, ctx.owner)

    if (unit) {
      buff(ctx, unit, 2, 0)
    }
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'a dusty training yard with wooden dummies, weapon racks and sparring warriors'
  }
})
