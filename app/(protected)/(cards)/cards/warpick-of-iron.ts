import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'warpick-of-iron',
  type: 'weapon',
  name: 'Warpick of Iron',
  text: 'When it is equipped: draw a card.',
  flavor: 'Made to open helmets like nutshells.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'epic',
  price: 1200,
  cost: 4,
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Warpick of Iron: a single warpick made of gilded marble, on a fur rug, diagonal dynamic composition, cobalt blue accents, warrior style'
  }
})
