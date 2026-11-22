import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'amber-eyed-blessing',
  type: 'ability',
  name: 'Amber-Eyed Blessing',
  text: 'Your hero heals 15.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 65,
  cost: 4,
  onPlay(ctx) {
    healHero(ctx, 15)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject: 'Amber-Eyed Blessing: warm golden light healing a wounded figure, prehistoric jungle era style'
  }
})
