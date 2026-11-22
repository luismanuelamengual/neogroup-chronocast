import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wild-boar',
  type: 'ally',
  name: 'Wild Boar',
  text: 'When it attacks: deal 2 damage to the enemy hero.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'beast',
  keywords: ['stealth'],
  attack: 3,
  health: 7,
  onAttack(ctx) {
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject: 'an ice-age beast, the wild boar, raising its weapon, hunter style'
  }
})
