import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, self, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'crooked-moon-wolf',
  type: 'ally',
  name: 'Crooked Moon Wolf',
  text: 'At the start of each phase: it heals 2.',
  flavor: 'Wounds close under a crooked moon.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 60,
  cost: 3,
  tribe: 'beast',
  attack: 5,
  health: 8,
  onPhaseStart(ctx) {
    const unit = self(ctx)
    const ref = unit && slotOf(ctx, unit)

    if (ref) {
      heal(ctx, ref, 2)
    }
  },
  ai: { value: 4 },
  art: {
    subject:
      'Crooked Moon Wolf: a hulking grey wolf with a scar across its muzzle howling under a crooked crescent moon, full body, indigo accents, prehistoric jungle era style'
  }
})
