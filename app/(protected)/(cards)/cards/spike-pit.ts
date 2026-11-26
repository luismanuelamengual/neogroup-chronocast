import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, markPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-pit',
  type: 'trap',
  name: 'Spike Pit',
  text: 'When an enemy ally attacks: deal 4 damage to it and it becomes your Prey.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 150,
  cost: 2,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 4)
      markPrey(ctx, event.unit)
    }
  },
  ai: { value: 2, tags: ['prey'] },
  art: {
    subject:
      'Spike Pit: a hidden pit lined with sharpened wooden stakes, broken branches over it, torn leaves, dramatic low angle, lime green accents, prehistoric jungle era style'
  }
})
