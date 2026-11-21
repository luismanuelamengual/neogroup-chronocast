import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'owl-messenger',
  type: 'ally',
  name: 'Owl Messenger',
  text: 'On enter: draw a card.',
  flavor: 'She delivers the letters you will write tomorrow.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 10,
  health: 9,
  keywords: ['flying'],
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a wise silver owl carrying a sealed scroll, flying across a starry violet sky'
  }
})
