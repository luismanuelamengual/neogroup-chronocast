import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'salve-of-the-wanderer',
  type: 'item',
  name: 'Salve of the Wanderer',
  text: 'Your hero heals 6.',
  flavor: 'Smells like five centuries of herbs.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 40,
  cost: 1,
  onPlay(ctx) {
    healHero(ctx, 6)
  },
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject:
      'Salve of the Wanderer: a small salve made of pale ash wood wrapped in red cloth, floating above a marble pedestal, close-up filling the frame, cobalt blue accents, time rift wanderer style'
  }
})
