import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'data-courier',
  type: 'ally',
  name: 'Data Courier',
  text: 'On enter: draw a card.',
  flavor: 'Your secrets, delivered encrypted. Mostly.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 6,
  health: 12,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a hooded hacker courier with a glowing data chip in hand, cables trailing from a neon backpack'
  }
})
