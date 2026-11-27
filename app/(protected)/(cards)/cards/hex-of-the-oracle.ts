import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-the-oracle',
  type: 'attachment',
  subtype: 'curse',
  name: 'Hex of the Oracle',
  text: 'Attach to an enemy ally: when it dies, a random ally of your discard pile returns to play.',
  flavor: 'She saw your weakness long ago.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  targets: ['enemyAlly'],
  onHostDeath(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Hex of the Oracle: an enchanted hex made of chrome with neon light strips, on a mossy rock, seen from above, scarlet accents, dark end-of-time void style'
  }
})
