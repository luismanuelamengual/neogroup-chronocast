import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, neighbors, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'augur-of-the-laurel',
  type: 'ally',
  name: 'Augur of the Laurel',
  text: 'At the start of each phase: the allies next to it heal 2.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  resist: ['light'],
  price: 50,
  cost: 2,
  tribe: 'oracle',
  keywords: ['guardian'],
  attack: 1,
  health: 7,
  onPhaseStart(ctx) {
    for (const unit of neighbors(ctx)) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        heal(ctx, ref, 2)
      }
    }
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Augur of the Laurel: a petite elderly woman with sun-weathered bronze skin, snow-white hair in thick dreadlocks and round spectacles, wearing a golden diadem, dressed in a sky-blue peplos with a veil, releasing a white bird, with a confident smirk, ivory accents, ancient bronze-age empire style'
  }
})
