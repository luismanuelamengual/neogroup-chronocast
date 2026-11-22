import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'feral-healer',
  type: 'ally',
  name: 'Feral Healer',
  text: 'When it attacks: your hero heals 3.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  resist: ['ice'],
  price: 55,
  cost: 3,
  tribe: 'caveborn',
  keywords: ['charge'],
  attack: 3,
  health: 8,
  onAttack(ctx) {
    healHero(ctx, 3)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'a prehistoric tribe warrior in furs and bone ornaments, the feral healer, standing guard, prehistoric jungle era style'
  }
})
