import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'quicken',
  type: 'ability',
  name: 'Quicken',
  text: 'An ally of yours gains +8 attack this phase. Instant.',
  flavor: 'Faster than the moment.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 150,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buffThisPhase(ctx, unit, 8)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a warrior surrounded by spinning clock hands, moving in a blur of speed lines'
  }
})
