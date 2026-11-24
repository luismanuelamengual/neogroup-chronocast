import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'manacle-of-the-hawk',
  type: 'attachment',
  name: 'Manacle of the Hawk',
  text: 'Attach to an enemy ally: each time it attacks, it takes 5 wind damage.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  element: 'wind',
  price: 65,
  cost: 4,
  targets: ['enemyAlly'],
  onHostAttack(ctx, host) {
    damageAlly(ctx, host, 5)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Manacle of the Hawk: an enchanted manacle made of blackened iron with gold inlay, swept by a spiraling gust with leaves, floating above a marble pedestal, seen from above, lime green accents, hunter style'
  }
})
