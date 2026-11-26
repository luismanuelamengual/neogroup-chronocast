import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'respite-of-renewal',
  type: 'ability',
  name: 'Respite of Renewal',
  text: 'Your hero heals 9.',
  flavor: 'Rest now. The war will wait.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  onPlay(ctx) {
    healHero(ctx, 9)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Respite of Renewal: a quiet campfire with a steaming kettle and bedroll, inside a cave of crystals, close-up filling the frame, ivory accents, mystic healer style'
  }
})
