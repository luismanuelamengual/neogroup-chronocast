import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cursed-trap',
  type: 'trap',
  name: 'Cursed Trap',
  text: "When an enemy ally is summoned: return it to its owner's hand.",
  flavor: 'Whoever set it did not survive it either.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    returnAt(ctx, event.unit)
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject:
      'Cursed Trap: a rusty iron jaw trap half buried in sand, swirling around the center, cobalt blue accents, prehistoric jungle era style'
  }
})
