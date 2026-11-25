import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'borrowed-hour-of-lost-time',
  type: 'ability',
  name: 'Borrowed Hour of Lost Time',
  text: 'Your hero gains 3 energy. Instant.',
  flavor: 'Borrowed from a day that never came.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainEnergy(ctx, ctx.owner, 3)
  },
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject:
      'Borrowed Hour of Lost Time: a great bell tower clock face glowing at midnight, above a calm lake at dusk, swirling around the center, indigo accents, time rift wanderer style'
  }
})
