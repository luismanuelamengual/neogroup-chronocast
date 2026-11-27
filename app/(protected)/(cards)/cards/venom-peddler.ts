import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'venom-peddler',
  type: 'ally',
  name: 'Venom Peddler',
  text: 'At the start of each phase: poison a random enemy ally (1).',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'drifter',
  attack: 3,
  health: 7,
  onPhaseStart(ctx) {
    const unit = randomAlly(ctx, ctx.opponent)
    const ref = unit ? slotOf(ctx, unit) : null

    if (ref) {
      poison(ctx, ref, 1)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Venom Peddler: a hunched peddler with a cart of bubbling green vials, a grin under a wide hood, dark ritual mood'
  }
})
