import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flash-powder',
  type: 'item',
  name: 'Flash Powder',
  text: 'Deal 4 damage to every enemy ally.',
  flavor: 'Blinding, and a little bit spicy.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 4)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a pouch of glittering powder exploding in a bright white flash'
  }
})
