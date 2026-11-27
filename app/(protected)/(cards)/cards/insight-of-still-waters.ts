import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'insight-of-still-waters',
  type: 'ability',
  subtype: 'program',
  name: 'Insight of Still Waters',
  text: 'Draw a card, or 2 if you have no allies.',
  flavor: 'Calm water shows the clearest future.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, alliesOf(ctx, ctx.owner).length === 0 ? 2 : 1)
  },
  ai: { value: 1, tags: ['draw'] },
  art: {
    subject:
      'Insight of Still Waters: a giant glowing eye opening in the sky, over rooftops at night, swirling around the center, magenta accents, mystic healer style'
  }
})
