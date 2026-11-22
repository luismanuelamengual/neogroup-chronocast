import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'warpick-of-iron',
  type: 'weapon',
  name: 'Warpick of Iron',
  text: 'When it is equipped: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'epic',
  price: 1880,
  cost: 4,
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5 },
  art: {
    subject: 'Warpick of Iron: a single warpick weapon floating in dramatic light, warrior style'
  }
})
