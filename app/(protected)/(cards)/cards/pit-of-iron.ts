import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pit-of-iron',
  type: 'trap',
  name: 'Pit of Iron',
  text: 'When an enemy ally is summoned: stun it and deal 3 earth damage to it.',
  flavor: 'The bottom is further than it looks.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      stunAt(ctx, event.unit)
      damage(ctx, event.unit, 3, 'earth')
    }
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject: 'Pit of Iron: a camouflaged pit with sharpened stakes, seen from above, emerald accents, warrior style'
  }
})
