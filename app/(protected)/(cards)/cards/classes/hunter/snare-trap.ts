import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-trap',
  type: 'trap',
  name: 'Snare Trap',
  text: 'When an enemy ally attacks: deal 10 damage to it.',
  flavor: 'Hidden under the leaves, waiting for a careless step.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 50,
  cost: 1,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 10)
    }
  },
  ai: { value: 2, tags: ['trap', 'removal'] },
  art: { subject: 'a hidden rope snare and sharpened wooden spikes under jungle leaves, a raptor footprint next to it' }
})
