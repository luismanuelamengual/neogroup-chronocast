import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardRandom } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'curse-of-ruin',
  type: 'attachment',
  subtype: 'curse',
  name: 'Curse of Ruin',
  text: 'Attach to an enemy ally: when it dies, the rival discards a random card.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  targets: ['enemyAlly'],
  onHostDeath(ctx) {
    discardRandom(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Curse of Ruin: a black wax seal stamped with a skull, dripping ink over a torn letter, close-up, acid green accents, dark end-of-time void style'
  }
})
