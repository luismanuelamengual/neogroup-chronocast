import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lucky-blessing',
  type: 'ability',
  name: 'Lucky Blessing',
  text: 'Your hero heals 12.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    healHero(ctx, 12)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Lucky Blessing: a halo of soft light over an empty altar, over a desert of red dunes, centered and seen from slightly below, cobalt blue accents, time rift wanderer style'
  }
})
