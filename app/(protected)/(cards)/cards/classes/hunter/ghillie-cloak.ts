import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ghillie-cloak',
  type: 'armor',
  name: 'Ghillie Cloak',
  text: 'On play: draw a card.',
  flavor: 'You are the forest now.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 50,
  cost: 2,
  armor: 12,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a hooded cloak covered in leaves, moss and twigs blending into a forest'
  }
})
