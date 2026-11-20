import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'temple-oracle',
  type: 'ally',
  name: 'Temple Oracle',
  text: 'On enter: draw a card.',
  flavor: 'She sees the future. It is mostly smoke.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 8,
  health: 20,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a veiled oracle sitting on a tripod above glowing vapors inside a dark temple'
  }
})
