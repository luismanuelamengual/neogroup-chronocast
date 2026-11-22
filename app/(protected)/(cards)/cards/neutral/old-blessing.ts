import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-blessing',
  type: 'ability',
  name: 'Old Blessing',
  text: 'Your hero heals 13 and draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1720,
  cost: 3,
  onPlay(ctx) {
    healHero(ctx, 13)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'heal'] },
  art: {
    subject: 'Old Blessing: warm golden light healing a wounded figure, time rift wanderer style'
  }
})
