import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hourglass-shard-of-borrowed-hours',
  type: 'item',
  name: 'Hourglass Shard of Borrowed Hours',
  text: 'You gain 4 Chronos this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 4)
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject:
      'Hourglass Shard of Borrowed Hours: a single hourglass shard of borrowed hours item lying on a stone, time rift wanderer style'
  }
})
