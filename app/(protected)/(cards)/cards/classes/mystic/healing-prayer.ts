import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'healing-prayer',
  type: 'ability',
  name: 'Healing Prayer',
  text: 'Your hero heals 10 and draw a card.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  onPlay(ctx) {
    healHero(ctx, 10)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw', 'heal'] },
  art: {
    subject: 'Healing Prayer: warm golden light healing a wounded figure, mystic healer style'
  }
})
