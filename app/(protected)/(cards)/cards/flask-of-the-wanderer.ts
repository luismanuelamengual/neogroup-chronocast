import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, seekType } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flask-of-the-wanderer',
  type: 'item',
  name: 'Flask of the Wanderer',
  text: 'Your hero heals 6. Draw the first artifact of your deck.',
  flavor: 'Never empty, never the same drink twice.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  onPlay(ctx) {
    healHero(ctx, 6)
    seekType(ctx, ctx.owner, 'artifact')
  },
  ai: { value: 4, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Flask of the Wanderer: a small flask made of rusted iron and chains, in a beam of light from above, dramatic backlight, teal accents, time rift wanderer style'
  }
})
