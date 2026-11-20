import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, neighbors } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shieldwall-veteran',
  type: 'ally',
  name: 'Shieldwall Veteran',
  text: 'On enter: the allies next to it gain +4 health.',
  flavor: 'Thirty years in the front row. Not one step back.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 7,
  health: 24,
  keywords: ['guardian'],
  onEnter(ctx) {
    for (const unit of neighbors(ctx)) {
      buff(ctx, unit, 0, 4)
    }
  },
  ai: { value: 3, tags: ['buff', 'defense'] },
  art: {
    subject: 'a grizzled legionary with a dented tower shield bracing against an incoming charge'
  }
})
