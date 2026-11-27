import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'net-of-the-volcano',
  type: 'trap',
  name: 'Net of the Volcano',
  text: 'When an enemy ally is summoned: deal 4 fire damage to it and to the allies next to it.',
  flavor: 'Woven with lava and patience.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'exotic',
  price: 3080,
  cost: 2,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 4, 'fire')

      for (const ref of slotsNextTo(ctx, event.unit)) {
        damage(ctx, ref, 4, 'fire')
      }
    }
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject:
      'Net of the Volcano: a weighted rope net hidden under leaves, about to spring, swirling around the center, teal accents, prehistoric jungle era style'
  }
})
