import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hall-of-echoes',
  type: 'location',
  name: 'Hall of Echoes',
  text: 'At the end of each phase, draw a card if you have 3 or fewer in hand.',
  flavor: 'Every word ever spoken still rings here.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  onPhaseEnd(ctx) {
    if (ctx.engine.player(ctx.owner).hand.length <= 3) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a vast marble hall with ghostly whispering echoes swirling between the columns'
  }
})
