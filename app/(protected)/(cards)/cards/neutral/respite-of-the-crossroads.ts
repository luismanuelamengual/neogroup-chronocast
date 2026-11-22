import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'respite-of-the-crossroads',
  type: 'ability',
  name: 'Respite of the Crossroads',
  text: 'Your hero heals 6.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 40,
  cost: 1,
  onPlay(ctx) {
    healHero(ctx, 6)
  },
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject: 'Respite of the Crossroads: warm golden light healing a wounded figure, time rift wanderer style'
  }
})
