import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, reviveTopAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rite-of-ashes',
  type: 'ability',
  subtype: 'ritual',
  name: 'Rite of Ashes',
  text: 'Consume 4 (banish 4 cards of your discard pile). The last ally of your discard pile returns to play with +2 attack and +2 health.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  consume: 4,
  onPlay(ctx) {
    const unit = reviveTopAlly(ctx, ctx.owner)

    if (unit) {
      buff(ctx, unit, 2, 2)
    }
  },
  ai: { value: 3, tags: ['revive'] },
  art: {
    subject:
      'Rite of Ashes: hooded cultists around a pyre of grey ashes from which a skeletal warrior rises wreathed in purple flame, night, purple accents, dark end-of-time void style'
  }
})
