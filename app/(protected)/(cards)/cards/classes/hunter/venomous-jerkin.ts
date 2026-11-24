import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'venomous-jerkin',
  type: 'armor',
  name: 'Venomous Jerkin',
  text: 'When it is equipped: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  armor: 7,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Venomous Jerkin: a single jerkin made of white bone and leather wraps, leaning against a ruined wall, diagonal dynamic composition, lime green accents, hunter style'
  }
})
