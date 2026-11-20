import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'phalanx-general',
  type: 'ally',
  name: 'Phalanx General',
  text: 'When another ally of yours enters, it gains +6 health.',
  flavor: 'One spear is a stick. A thousand is a fortress.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  attack: 16,
  health: 40,
  keywords: ['guardian'],
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 0, 6)
  },
  ai: { value: 6, tags: ['buff', 'defense'] },
  art: {
    subject: 'a Greek general in a crested Corinthian helmet commanding a phalanx bristling with long spears'
  }
})
