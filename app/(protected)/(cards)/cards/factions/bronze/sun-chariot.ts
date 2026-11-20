import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sun-chariot',
  type: 'ally',
  name: 'Sun Chariot',
  text: 'On enter: deal 6 damage to the enemy hero.',
  flavor: 'It crosses the sky every day. Today it crosses you.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  attack: 22,
  health: 28,
  keywords: ['charge', 'quick'],
  onEnter(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 6)
  },
  ai: { value: 6, tags: ['burn', 'aggro'] },
  art: {
    subject: 'a blazing golden chariot pulled by fiery horses racing down from the sky in a trail of sunlight'
  }
})
