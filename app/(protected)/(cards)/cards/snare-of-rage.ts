import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-rage',
  type: 'trap',
  name: 'Snare of Rage',
  text: 'When the enemy uses an ability: draw a card and deal 4 damage to the enemy hero.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    draw(ctx, ctx.owner, 1)
    damageEnemyHero(ctx, 4)
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject:
      'Snare of Rage: a looped snare hidden in tall grass, diagonal dynamic composition, teal accents, warrior style'
  }
})
