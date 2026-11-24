import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bold-blessing',
  type: 'ability',
  name: 'Bold Blessing',
  text: 'Your hero heals 16 and draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 5200,
  cost: 4,
  onPlay(ctx) {
    healHero(ctx, 16)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Bold Blessing: a halo of soft light over an empty altar, above a calm lake at dusk, diagonal dynamic composition, crimson accents, time rift wanderer style'
  }
})
