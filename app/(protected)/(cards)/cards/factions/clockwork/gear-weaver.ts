import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gear-weaver',
  type: 'ally',
  name: 'Gear Weaver',
  text: 'When another ally of yours enters, it gains +1 attack and +2 health.',
  flavor: 'She builds tiny upgrades for everyone she meets.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 9,
  health: 16,
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 1, 2)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'an inventor woman with mechanical spider arms assembling tiny gears onto a robot'
  }
})
