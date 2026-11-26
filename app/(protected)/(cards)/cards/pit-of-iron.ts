import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pit-of-iron',
  type: 'trap',
  name: 'Pit of Iron',
  text: 'When an enemy ally is summoned: freeze it.',
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
      freeze(ctx, event.unit)
    }
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject: 'Pit of Iron: a camouflaged pit with sharpened stakes, seen from above, emerald accents, warrior style'
  }
})
