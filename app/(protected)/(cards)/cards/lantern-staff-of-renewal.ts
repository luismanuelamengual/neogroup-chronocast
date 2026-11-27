import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, heal, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-staff-of-renewal',
  type: 'weapon',
  subtype: 'staff',
  name: 'Lantern Staff of Renewal',
  text: 'When your hero attacks with it: your Guardian allies heal 2.',
  flavor: 'Its light remembers how things used to be.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  keywords: ['lifesteal'],
  attack: 1,
  durability: 2,
  onAttack(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      const ref = unit.keywords.includes('guardian') ? slotOf(ctx, unit) : null

      if (ref) {
        heal(ctx, ref, 2)
      }
    }
  },
  ai: { value: 1 },
  art: {
    subject:
      'Lantern Staff of Renewal: a single staff made of chrome with neon light strips, on a workbench with tools, bursting toward the viewer, saffron yellow accents, mystic healer style'
  }
})
