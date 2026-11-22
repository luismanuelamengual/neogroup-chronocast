import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'courier-of-the-mainframe',
  type: 'ally',
  name: 'Courier of the Mainframe',
  text: 'When it attacks: deal 3 sonic damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  element: 'sonic',
  price: 220,
  cost: 6,
  tribe: 'enforcer',
  attack: 8,
  health: 12,
  onAttack(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 6, tags: ['aggro'] },
  art: {
    subject: 'a cyberpunk street criminal, the courier of the mainframe, standing guard, neon cyberpunk future style'
  }
})
