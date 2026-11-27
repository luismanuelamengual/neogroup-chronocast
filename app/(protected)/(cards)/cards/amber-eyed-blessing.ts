import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'amber-eyed-blessing',
  type: 'ability',
  subtype: 'instinct',
  name: 'Amber-Eyed Blessing',
  text: 'Your hero heals 3 for each ally of yours.',
  flavor: 'The old spirits watch through amber eyes.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  onPlay(ctx) {
    healHero(ctx, 3 * alliesOf(ctx, ctx.owner).length)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject:
      'Amber-Eyed Blessing: a halo of soft light over an empty altar, over a stormy battlefield, seen from above, lime green accents, prehistoric jungle era style'
  }
})
