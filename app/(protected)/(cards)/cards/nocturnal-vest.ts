import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nocturnal-vest',
  type: 'armor',
  name: 'Nocturnal Vest',
  text: 'When it is equipped: draw a card.',
  flavor: 'Darker than the night it hides in.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  armor: 2,
  durability: 4,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Nocturnal Vest: a single vest made of copper with green patina, stuck in the sand, centered and seen from slightly below, teal accents, hunter style'
  }
})
