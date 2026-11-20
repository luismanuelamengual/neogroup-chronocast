import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, cardOf, neighbors } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bronze-cohort',
  type: 'ally',
  name: 'Bronze Cohort',
  text: 'On enter: if another Bronze ally is next to it, it gains +2 attack and +4 health.',
  flavor: 'Alone, a soldier. Together, a wall.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 6,
  health: 12,
  onEnter(ctx) {
    if (neighbors(ctx).some((ally) => cardOf(ally).faction === 'bronze')) {
      buffSelf(ctx, 2, 4)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a small group of Roman legionaries locking their rectangular shields side by side on a dusty road'
  }
})
