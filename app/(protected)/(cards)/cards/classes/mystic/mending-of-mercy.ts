import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mending-of-mercy',
  type: 'ability',
  name: 'Mending of Mercy',
  text: 'Your hero heals 12.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    healHero(ctx, 12)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'Mending of Mercy: warm golden light healing a wounded figure, mystic healer style'
  }
})
