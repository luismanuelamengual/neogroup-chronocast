import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'resurrection',
  type: 'ability',
  name: 'Resurrection',
  text: 'A random ally of your discard pile returns to play and your hero heals 5.',
  flavor: 'Not yet. You are not done yet.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 5)
  },
  ai: { value: 3, tags: ['revive', 'heal'] },
  art: {
    subject: 'a fallen warrior rising from the ground in a column of golden light, a mystic guiding him'
  }
})
