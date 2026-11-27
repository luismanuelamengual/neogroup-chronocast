import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroy, draw, gainEnergy, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pain-for-power',
  type: 'ability',
  subtype: 'ritual',
  name: 'Pain for Power',
  text: 'Destroy an ally of yours. Draw 2 cards and your hero gains 2 energy.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 130,
  cost: 1,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      destroy(ctx, unit)
      draw(ctx, ctx.owner, 2)
      gainEnergy(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Pain for Power: a cultist plunging a black dagger into a willing servant, dark energy flowing into an open book, dark ritual mood'
  }
})
