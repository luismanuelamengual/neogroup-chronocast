import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'timeless-tick',
  type: 'ability',
  name: 'Timeless Tick',
  text: 'You gain 3 Chronos this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 3)
  },
  ai: { value: 1, tags: ['ramp'] },
  art: {
    subject: 'Timeless Tick: a giant hourglass with sand flowing upward, time rift wanderer style'
  }
})
