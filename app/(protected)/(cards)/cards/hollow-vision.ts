import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hollow-vision',
  type: 'ability',
  subtype: 'ritual',
  name: 'Hollow Vision',
  text: 'Consume 2 (banish 2 cards of your discard pile). Draw 3 cards.',
  flavor: 'It shows what is missing.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 3)
  },
  consume: 2,
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Hollow Vision: a crystal ball showing swirling images, in a dark forest clearing, bursting toward the viewer, gold accents, dark end-of-time void style'
  }
})
