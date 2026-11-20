import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cursed-skull',
  type: 'item',
  name: 'Cursed Skull',
  text: 'Deal 4 damage to the enemy hero and draw a card.',
  flavor: 'It laughs at night. Only at night.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 45,
  cost: 1,
  onPlay(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 4)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['burn', 'draw'] },
  art: {
    subject: 'a cracked skull with glowing green eye sockets resting on a pile of old books'
  }
})
