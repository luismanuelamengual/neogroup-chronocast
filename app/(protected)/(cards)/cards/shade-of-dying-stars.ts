import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shade-of-dying-stars',
  type: 'ally',
  name: 'Shade of Dying Stars',
  text: 'When an enemy ally dies: deal 1 shadow damage to the enemy hero.',
  flavor: 'It wears the light of stars already gone.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'common',
  element: 'arcane',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 70,
  cost: 5,
  tribe: 'horror',
  attack: 6,
  health: 12,
  onEnemyAllyDeath(ctx) {
    damageEnemyHero(ctx, 1, 'shadow')
  },
  ai: { value: 5 },
  art: {
    subject:
      'Shade of Dying Stars: a shade with translucent purple membranes and many writhing limbs, pawing the ground, tangerine accents, dark end-of-time void style'
  }
})
