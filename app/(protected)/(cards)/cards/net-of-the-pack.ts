import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'net-of-the-pack',
  type: 'trap',
  name: 'Net of the Pack',
  text: 'When an enemy ally is summoned: deal 11 damage to it.',
  flavor: 'The pack drives, the net catches.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 11)
    }
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject:
      'Net of the Pack: a weighted rope net hidden under leaves, about to spring, swirling around the center, ivory accents, hunter style'
  }
})
