import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mending-of-mercy',
  type: 'ability',
  name: 'Mending of Mercy',
  text: 'Your hero heals 12.',
  flavor: 'Mercy heals the giver too.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    healHero(ctx, 12)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Mending of Mercy: a glowing needle stitching a torn cloth back together, in a snowy pass, close-up filling the frame, saffron yellow accents, mystic healer style'
  }
})
