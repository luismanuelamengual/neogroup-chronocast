import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cursed-trap',
  type: 'trap',
  name: 'Cursed Trap',
  text: 'When an enemy ally is summoned: freeze it.',
  flavor: 'Whoever set it did not survive it either.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      freeze(ctx, event.unit)
    }
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject:
      'Cursed Trap: a rusty iron jaw trap half buried in sand, swirling around the center, cobalt blue accents, dark end-of-time void style'
  }
})
