import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armor-breaker',
  type: 'ally',
  name: 'Armor Breaker',
  text: 'When it enters: the enemy hero loses all its armor.',
  flavor: 'He does not knock. He just comes in.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 6,
  health: 8,
  onEnter(ctx) {
    destroyArmor(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'a huge warrior with a spiked maul crushing a steel shield and breastplate in one blow'
  }
})
