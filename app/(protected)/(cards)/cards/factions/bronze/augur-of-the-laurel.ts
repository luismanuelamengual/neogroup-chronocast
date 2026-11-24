import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'augur-of-the-laurel',
  type: 'ally',
  name: 'Augur of the Laurel',
  text: 'At the start of each phase: your hero gains 2 armor.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  resist: ['light'],
  price: 50,
  cost: 2,
  tribe: 'oracle',
  keywords: ['guardian'],
  attack: 1,
  health: 7,
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Augur of the Laurel: a petite elderly woman with sun-weathered bronze skin, snow-white hair in thick dreadlocks and round spectacles, wearing a golden diadem, dressed in a sky-blue peplos with a veil, releasing a white bird, with a confident smirk, ivory accents, ancient bronze-age empire style'
  }
})
