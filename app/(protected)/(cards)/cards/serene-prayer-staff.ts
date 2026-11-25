import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'serene-prayer-staff',
  type: 'weapon',
  name: 'Serene Prayer Staff',
  text: 'When it is equipped: draw a card.',
  flavor: 'Each knot holds a quiet prayer.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  attack: 3,
  durability: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Serene Prayer Staff: a single staff made of rusted iron and chains, stuck in the sand, centered and seen from slightly below, scarlet accents, mystic healer style'
  }
})
