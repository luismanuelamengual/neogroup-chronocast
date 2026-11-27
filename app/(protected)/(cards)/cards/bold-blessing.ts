import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bold-blessing',
  type: 'ability',
  subtype: 'instinct',
  name: 'Bold Blessing',
  text: 'Your hero heals 10. Draw a card for each Guardian ally of yours.',
  flavor: 'Fortune favors the loud.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'legendary',
  price: 2240,
  cost: 4,
  onPlay(ctx) {
    healHero(ctx, 10)
    draw(ctx, ctx.owner, alliesOf(ctx, ctx.owner).filter((unit) => unit.keywords.includes('guardian')).length)
  },
  ai: { value: 6, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Bold Blessing: a halo of soft light over an empty altar, above a calm lake at dusk, diagonal dynamic composition, crimson accents, prehistoric jungle era style'
  }
})
