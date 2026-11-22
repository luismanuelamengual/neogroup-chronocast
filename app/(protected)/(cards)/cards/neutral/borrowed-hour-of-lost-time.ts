import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'borrowed-hour-of-lost-time',
  type: 'ability',
  name: 'Borrowed Hour of Lost Time',
  text: 'Your hero gains 3 energy. Instant.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainEnergy(ctx, ctx.owner, 3)
  },
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject: 'Borrowed Hour of Lost Time: a giant hourglass with sand flowing upward, time rift wanderer style'
  }
})
