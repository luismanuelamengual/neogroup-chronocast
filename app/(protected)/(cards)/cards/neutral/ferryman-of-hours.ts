import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ferryman-of-hours',
  type: 'ally',
  name: 'Ferryman of Hours',
  text: 'On enter: draw a card.',
  flavor: 'For a coin, he rows you to any day you like.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 12,
  health: 13,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a hooded ferryman rowing a small boat across a river of floating clock gears'
  }
})
