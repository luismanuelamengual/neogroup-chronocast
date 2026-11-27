import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mending-of-mercy',
  type: 'ability',
  subtype: 'instinct',
  name: 'Mending of Mercy',
  text: 'Your hero and your allies heal 5.',
  flavor: 'Mercy heals the giver too.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    healHero(ctx, 5)
    healAllAllies(ctx, ctx.owner, 5)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Mending of Mercy: a glowing needle stitching a torn cloth back together, in a snowy pass, close-up filling the frame, saffron yellow accents, mystic healer style'
  }
})
