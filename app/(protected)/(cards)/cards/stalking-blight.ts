import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, isCursed, poison, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stalking-blight',
  type: 'ability',
  subtype: 'ritual',
  name: 'Stalking Blight',
  text: 'Poison every enemy ally that has a curse (3).',
  flavor: 'It follows you home.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      const ref = slotOf(ctx, unit)

      if (ref && isCursed(unit)) {
        poison(ctx, ref, 3)
      }
    }
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Stalking Blight: withered black thorns spreading over dead leaves, over a stormy battlefield, close-up filling the frame, scarlet accents, hunter style'
  }
})
