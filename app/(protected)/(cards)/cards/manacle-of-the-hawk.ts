import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'manacle-of-the-hawk',
  type: 'attachment',
  subtype: 'curse',
  name: 'Manacle of the Hawk',
  text: 'Attach to an enemy ally: each time it attacks, your hero heals 3.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'common',
  element: 'wind',
  price: 65,
  cost: 4,
  targets: ['enemyAlly'],
  onHostAttack(ctx) {
    healHero(ctx, 3)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Manacle of the Hawk: an enchanted manacle made of blackened iron with gold inlay, swept by a spiraling gust with leaves, floating above a marble pedestal, seen from above, lime green accents, hunter style'
  }
})
