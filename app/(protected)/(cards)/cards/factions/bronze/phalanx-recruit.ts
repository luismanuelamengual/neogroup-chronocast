import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, neighbors } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'phalanx-recruit',
  type: 'ally',
  name: 'Phalanx Recruit',
  text: 'On enter: the allies next to it gain +4 health.',
  flavor: 'Shoulder to shoulder, even on the first day.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 50,
  cost: 1,
  attack: 5,
  health: 6,
  onEnter(ctx) {
    for (const ally of neighbors(ctx)) {
      buff(ctx, ally, 0, 4)
    }
  },
  ai: { value: 2, tags: ['formation'] },
  art: {
    subject: 'a nervous but brave young hoplite with a round bronze shield and a long spear, in a tight phalanx line'
  }
})
