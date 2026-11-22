import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'electric-glitch',
  type: 'ally',
  name: 'Electric Glitch',
  text: 'At the end of each phase: deal 1 lightning damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  element: 'lightning',
  price: 750,
  cost: 6,
  tribe: 'netrunner',
  keywords: ['ranged'],
  attack: 9,
  health: 11,
  onPhaseEnd(ctx) {
    damageEnemyHero(ctx, 1)
  },
  ai: { value: 7, tags: ['aggro'] },
  art: {
    subject:
      'a cyberpunk hacker with holographic screens, the electric glitch, glaring at the viewer, neon cyberpunk future style'
  }
})
