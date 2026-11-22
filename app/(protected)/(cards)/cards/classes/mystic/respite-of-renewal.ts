import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'respite-of-renewal',
  type: 'ability',
  name: 'Respite of Renewal',
  text: 'Your hero heals 9.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  onPlay(ctx) {
    healHero(ctx, 9)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject: 'Respite of Renewal: warm golden light healing a wounded figure, mystic healer style'
  }
})
