import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainChronosCapacity, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cobraskin-shroud',
  type: 'armor',
  subtype: 'shroud',
  name: 'Cobraskin Shroud',
  text: 'When it is equipped: both players lose 1 Chronos capacity, and you draw a card.',
  flavor: 'The venom is in the weave.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  armor: 1,
  durability: 5,
  onPlay(ctx) {
    drainChronosCapacity(ctx, ctx.owner, 1)
    drainChronosCapacity(ctx, ctx.opponent, 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw', 'control'] },
  art: {
    subject:
      'Cobraskin Shroud: wrappings of shimmering cobra skin with a hooded cobra head clasp, draped on a stone bust, close-up filling the frame, jade accents, dark end-of-time void style'
  }
})
