import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wild-boar',
  type: 'ally',
  name: 'Wild Boar',
  text: 'When it attacks: deal 2 damage to the enemy hero.',
  flavor: 'Charges first, thinks never.',
  faction: 'neutral',
  restriction: {},
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
    subject:
      'Wild Boar: a boar with spotted cream fur and massive sabre fangs, standing proud on a rock, crimson accents, hunter style'
  }
})
