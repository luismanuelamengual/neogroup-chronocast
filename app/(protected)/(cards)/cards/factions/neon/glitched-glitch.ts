import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'glitched-glitch',
  type: 'ally',
  name: 'Glitched Glitch',
  text: 'When it attacks: deal 2 lightning damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  element: 'lightning',
  price: 65,
  cost: 4,
  tribe: 'netrunner',
  keywords: ['ranged'],
  attack: 3,
  health: 10,
  onAttack(ctx) {
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject:
      'a cyberpunk hacker with holographic screens, the glitched glitch, charging into battle, neon cyberpunk future style'
  }
})
