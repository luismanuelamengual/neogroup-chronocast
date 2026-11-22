import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sharp-jerkin',
  type: 'armor',
  name: 'Sharp Jerkin',
  text: 'When it is equipped: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 690,
  cost: 5,
  armor: 16,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 6 },
  art: {
    subject: 'Sharp Jerkin: a single piece of armor on a stand, hunter style'
  }
})
