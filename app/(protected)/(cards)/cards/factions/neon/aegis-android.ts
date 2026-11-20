import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aegis-android',
  type: 'ally',
  name: 'Aegis Android',
  text: 'When another ally of yours enters, it gains +6 health.',
  flavor: 'Protocol one: protect. There is no protocol two.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  attack: 14,
  health: 40,
  keywords: ['guardian', 'shield'],
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 0, 6)
  },
  ai: { value: 6, tags: ['buff', 'defense'] },
  art: {
    subject: 'a sleek white android deploying a giant hexagonal energy shield in front of a group of rebels'
  }
})
