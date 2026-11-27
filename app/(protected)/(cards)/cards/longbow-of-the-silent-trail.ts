import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'longbow-of-the-silent-trail',
  type: 'weapon',
  subtype: 'bow',
  name: 'Longbow of the Silent Trail',
  text: 'When it is equipped: poison a random enemy ally (2).',
  flavor: 'The arrow arrives before the sound.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  keywords: ['poison'],
  attack: 1,
  durability: 2,
  onPlay(ctx) {
    const unit = randomAlly(ctx, ctx.opponent)
    const ref = unit ? slotOf(ctx, unit) : null

    if (ref) {
      poison(ctx, ref, 2)
    }
  },
  ai: { value: 1 },
  art: {
    subject:
      'Longbow of the Silent Trail: a single longbow made of polished bronze with engraved spirals, on a mossy rock, swirling around the center, cobalt blue accents, hunter style'
  }
})
