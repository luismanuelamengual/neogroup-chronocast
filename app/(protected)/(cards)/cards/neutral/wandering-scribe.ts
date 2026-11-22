import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-scribe',
  type: 'ally',
  name: 'Wandering Scribe',
  text: 'When it enters: draw a card.',
  flavor: 'He writes down every road, so you can choose yours.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 70,
  cost: 2,
  attack: 4,
  health: 6,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a traveling scribe with a huge backpack of scrolls, writing in a book while walking a mountain path'
  }
})
