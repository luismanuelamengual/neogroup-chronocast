import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroy, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-collapse',
  type: 'trap',
  name: 'Rift Collapse',
  text: 'When an enemy ally attacks: destroy it.',
  flavor: 'The Rift closes, and takes something with it.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1700,
  cost: 3,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    const unit = event.unit ? unitAt(ctx, event.unit) : null

    event.cancel()

    if (unit) {
      destroy(ctx, unit)
    }
  },
  ai: { value: 5, tags: ['trap', 'removal'] },
  art: {
    subject: 'a rift snapping shut and swallowing a monster in a flash of turquoise light'
  }
})
