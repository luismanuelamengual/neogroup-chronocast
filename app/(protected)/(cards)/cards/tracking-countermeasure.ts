import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-countermeasure',
  type: 'trap',
  name: 'Tracking Countermeasure',
  text: 'When the enemy uses an ability: the enemy hero loses 3 energy.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    drainEnergy(ctx, ctx.opponent, 3)
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject:
      'Tracking Countermeasure: a hidden pressure plate wired with glowing filaments, bursting toward the viewer, cobalt blue accents, hunter style'
  }
})
