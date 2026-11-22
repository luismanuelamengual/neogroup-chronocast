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
      'an ancient temple seer in white robes, the augur of the laurel, raising its weapon, ancient bronze-age empire style'
  }
})
