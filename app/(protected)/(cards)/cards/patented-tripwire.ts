import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patented-tripwire',
  type: 'trap',
  name: 'Patented Tripwire',
  text: 'When an enemy ally is summoned: deal 7 damage to it.',
  flavor: 'Model 7. Models 1 to 6 caught their inventors.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 7)
    }
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject:
      'Patented Tripwire: a thin glinting tripwire stretched low between rocks, seen from above, emerald accents, steampunk steam era style'
  }
})
