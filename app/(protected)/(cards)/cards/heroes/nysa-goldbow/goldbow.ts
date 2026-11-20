import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'goldbow',
  type: 'weapon',
  name: 'The Goldbow',
  text: 'On play: draw a card.',
  flavor: 'A gift from the sun to the best archer under it.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'nysa-goldbow' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 10,
  durability: 4,
  keywords: ['ranged'],
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject: 'a magnificent golden recurve bow engraved with sun rays, glowing on a marble altar'
  }
})
