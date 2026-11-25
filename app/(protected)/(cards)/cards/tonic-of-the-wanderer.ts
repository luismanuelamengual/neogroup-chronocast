import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tonic-of-the-wanderer',
  type: 'item',
  name: 'Tonic of the Wanderer',
  text: 'Draw the first Elemental of your deck and draw the first Elemental of your deck.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 65,
  cost: 4,
  onPlay(ctx) {
    seekTribe(ctx, ctx.owner, 'elemental')
    seekTribe(ctx, ctx.owner, 'elemental')
  },
  ai: { value: 4, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Tonic of the Wanderer: a small tonic made of blackened iron with gold inlay, on a pile of old coins, swirling around the center, tangerine accents, time rift wanderer style'
  }
})
