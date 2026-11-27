import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { cleanse, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'salve-of-the-wanderer',
  type: 'item',
  name: 'Salve of the Wanderer',
  text: 'An ally of yours heals 6 and loses its poison and burn.',
  flavor: 'Smells like five centuries of herbs.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  onPlay(ctx) {
    cleanse(ctx, ctx.targets[0])
    heal(ctx, ctx.targets[0], 6)
  },
  targets: ['friendlyAlly'],
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject:
      'Salve of the Wanderer: a small salve made of pale ash wood wrapped in red cloth, floating above a marble pedestal, close-up filling the frame, cobalt blue accents, time rift wanderer style'
  }
})
