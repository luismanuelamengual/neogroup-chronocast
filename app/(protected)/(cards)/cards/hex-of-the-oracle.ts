import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isHost } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-the-oracle',
  type: 'attachment',
  subtype: 'curse',
  name: 'Hex of the Oracle',
  text: 'Attach to an enemy ally: every damage it takes is 3 higher.',
  flavor: 'She saw your weakness long ago.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  targets: ['enemyAlly'],
  modifyDamage(ctx, target, amount) {
    return isHost(ctx, target) ? amount + 3 : amount
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Hex of the Oracle: an enchanted hex made of chrome with neon light strips, on a mossy rock, seen from above, scarlet accents, dark end-of-time void style'
  }
})
