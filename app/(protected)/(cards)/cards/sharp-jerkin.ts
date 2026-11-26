import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sharp-jerkin',
  type: 'armor',
  subtype: 'suit',
  name: 'Sharp Jerkin',
  text: 'When it is equipped: draw a card.',
  flavor: 'Hug at your own risk.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 540,
  cost: 5,
  armor: 4,
  durability: 4,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 6 },
  art: {
    subject:
      'Sharp Jerkin: a single jerkin made of pale ash wood wrapped in red cloth, resting on a velvet cloth, close-up filling the frame, amber accents, hunter style'
  }
})
