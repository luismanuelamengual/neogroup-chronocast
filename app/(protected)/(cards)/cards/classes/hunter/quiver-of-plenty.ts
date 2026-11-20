import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'quiver-of-plenty',
  type: 'item',
  name: 'Quiver of Plenty',
  text: 'Draw 2 cards. Fast.',
  flavor: 'Somehow, there is always one more arrow.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 525,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a leather quiver overflowing with glowing arrows that keep appearing'
  }
})
