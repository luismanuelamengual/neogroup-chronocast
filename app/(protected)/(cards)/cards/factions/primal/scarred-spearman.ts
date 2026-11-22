import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scarred-spearman',
  type: 'ally',
  name: 'Scarred Spearman',
  text: 'After it takes damage: it gains +2 attack.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  resist: ['ice'],
  price: 220,
  cost: 6,
  tribe: 'caveborn',
  keywords: ['guardian'],
  attack: 6,
  health: 14,
  onDamaged(ctx) {
    buffSelf(ctx, 2, 0)
  },
  ai: { value: 6, tags: ['buff'] },
  art: {
    subject:
      'a prehistoric tribe warrior in furs and bone ornaments, the scarred spearman, mid-leap, prehistoric jungle era style'
  }
})
