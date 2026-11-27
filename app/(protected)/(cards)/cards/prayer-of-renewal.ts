import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, heal, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'prayer-of-renewal',
  type: 'ability',
  subtype: 'tactic',
  name: 'Prayer of Renewal',
  text: 'Your allies heal completely.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 400,
  cost: 4,
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        heal(ctx, ref, unit.maxHealth)
      }
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Prayer of Renewal: a circle of kneeling priests whose prayer rises as a column of light over a battlefield, wounds of soldiers glowing closed, mystic healer style'
  }
})
