import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pit-of-spirits',
  type: 'trap',
  name: 'Pit of Spirits',
  text: 'When the enemy uses an ability: draw a card and deal 5 light damage to the enemy hero.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  element: 'light',
  price: 55,
  cost: 3,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    draw(ctx, ctx.owner, 1)
    damageEnemyHero(ctx, 5)
  },
  ai: { value: 3, tags: ['trap'] },
  art: {
    subject: 'Pit of Spirits: a hidden spirits about to spring, mystic healer style'
  }
})
