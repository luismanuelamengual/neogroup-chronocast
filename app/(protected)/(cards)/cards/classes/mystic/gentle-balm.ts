import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gentle-balm',
  type: 'ability',
  name: 'Gentle Balm',
  text: 'Your hero heals 16 and draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'epic',
  price: 1880,
  cost: 4,
  onPlay(ctx) {
    healHero(ctx, 16)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['draw', 'heal'] },
  art: {
    subject: 'Gentle Balm: warm golden light healing a wounded figure, mystic healer style'
  }
})
