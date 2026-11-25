import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'amber-eyed-blessing',
  type: 'ability',
  name: 'Amber-Eyed Blessing',
  text: 'Your hero heals 15.',
  flavor: 'The old spirits watch through amber eyes.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  onPlay(ctx) {
    healHero(ctx, 15)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject:
      'Amber-Eyed Blessing: a halo of soft light over an empty altar, over a stormy battlefield, seen from above, lime green accents, prehistoric jungle era style'
  }
})
