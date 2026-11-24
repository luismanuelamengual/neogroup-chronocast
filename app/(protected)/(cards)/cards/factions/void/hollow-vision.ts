import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hollow-vision',
  type: 'ability',
  name: 'Hollow Vision',
  text: 'Draw 2 cards.',
  flavor: 'It shows what is missing.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Hollow Vision: a crystal ball showing swirling images, in a dark forest clearing, bursting toward the viewer, gold accents, dark end-of-time void style'
  }
})
