import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'faithful-moment',
  type: 'ability',
  name: 'Faithful Moment',
  text: 'You gain 4 Chronos this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 4)
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject: 'Faithful Moment: a giant hourglass with sand flowing upward, time rift wanderer style'
  }
})
