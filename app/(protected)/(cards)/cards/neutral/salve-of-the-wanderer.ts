import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'salve-of-the-wanderer',
  type: 'item',
  name: 'Salve of the Wanderer',
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
    subject: 'Salve of the Wanderer: a single salve of the wanderer item lying on a stone, time rift wanderer style'
  }
})
