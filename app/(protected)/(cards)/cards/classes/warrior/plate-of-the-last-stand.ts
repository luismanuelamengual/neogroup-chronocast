import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'plate-of-the-last-stand',
  type: 'armor',
  name: 'Plate of the Last Stand',
  text: 'When it is equipped: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 690,
  cost: 5,
  armor: 16,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 6 },
  art: {
    subject:
      'Plate of the Last Stand: a single plate made of rusted iron and chains, on cracked stone tiles, swirling around the center, turquoise accents, warrior style'
  }
})
