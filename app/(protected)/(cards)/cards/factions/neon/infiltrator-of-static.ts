import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'infiltrator-of-static',
  type: 'ally',
  name: 'Infiltrator of Static',
  text: 'When it attacks: deal 3 lightning damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  element: 'lightning',
  price: 205,
  cost: 5,
  tribe: 'netrunner',
  keywords: ['stealth'],
  attack: 5,
  health: 10,
  onAttack(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject:
      'a cyberpunk hacker with holographic screens, the infiltrator of static, roaring, neon cyberpunk future style'
  }
})
