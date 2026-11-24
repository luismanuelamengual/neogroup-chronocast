import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'respite-of-mercy',
  type: 'ability',
  name: 'Respite of Mercy',
  text: 'Your hero heals 9.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    healHero(ctx, 9)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Respite of Mercy: a quiet campfire with a steaming kettle and bedroll, in a dark forest clearing, diagonal dynamic composition, magenta accents, mystic healer style'
  }
})
