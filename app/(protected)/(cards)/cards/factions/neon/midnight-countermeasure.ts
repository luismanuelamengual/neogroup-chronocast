import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'midnight-countermeasure',
  type: 'trap',
  name: 'Midnight Countermeasure',
  text: 'When the enemy uses an ability: draw a card and deal 4 shadow damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'legendary',
  element: 'shadow',
  price: 4400,
  cost: 2,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    draw(ctx, ctx.owner, 1)
    damageEnemyHero(ctx, 4)
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject:
      'Midnight Countermeasure: a hidden pressure plate wired with glowing filaments, wrapped in swirling black smoke, close-up filling the frame, saffron yellow accents, neon cyberpunk future style'
  }
})
