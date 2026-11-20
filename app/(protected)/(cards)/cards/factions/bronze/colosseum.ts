import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'colosseum',
  type: 'location',
  name: 'Colosseum',
  text: 'Your allies enter with +4 attack.',
  flavor: 'Fifty thousand voices, one roar.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 4, 0)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject:
      'the grand colosseum seen from the arena floor, golden sunlight, banners in red and gold and a cheering crowd'
  }
})
