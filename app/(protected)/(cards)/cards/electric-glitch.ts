import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'electric-glitch',
  type: 'ally',
  name: 'Electric Glitch',
  text: 'At the end of each phase: deal 1 lightning damage to the enemy hero.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['dawn'] },
  rarity: 'rare',
  element: 'lightning',
  price: 600,
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
      'Electric Glitch: a willowy adult woman with sun-weathered bronze skin, ultraviolet hair in an undercut and a beauty mark, wearing chunky headphones, dressed in a tracksuit with a neural crown, gripping a well-worn weapon, kneeling on one knee, with a booming laugh, tangerine accents, neon cyberpunk future style'
  }
})
