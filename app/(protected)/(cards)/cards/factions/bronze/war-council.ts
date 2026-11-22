import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'war-council',
  type: 'ability',
  name: 'War Council',
  text: 'Draw 2 cards.',
  flavor: 'Plans are made around the table, and won on the field.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 60,
  cost: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'roman generals around a big table with a map and bronze figurines, lit by torches in a war tent'
  }
})
