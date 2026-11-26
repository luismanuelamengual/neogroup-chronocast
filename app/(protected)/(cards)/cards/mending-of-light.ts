import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mending-of-light',
  type: 'ability',
  name: 'Mending of Light',
  text: 'Your hero heals 9.',
  flavor: 'Light fills the cracks first.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    healHero(ctx, 9)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Mending of Light: a glowing needle stitching a torn cloth back together, over rooftops at night, centered and seen from slightly below, cobalt blue accents, mystic healer style'
  }
})
