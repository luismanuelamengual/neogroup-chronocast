import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hourglass-shard-of-borrowed-hours',
  type: 'item',
  name: 'Hourglass Shard of Borrowed Hours',
  text: 'You gain 1 Chronos this phase for each card in your hand (up to 4). Instant.',
  flavor: 'A splinter of time, sharp at both ends.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, Math.min(4, ctx.engine.player(ctx.owner).hand.length))
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject:
      'Hourglass Shard of Borrowed Hours: a small shard made of pale ash wood wrapped in red cloth, leaning against a ruined wall, diagonal dynamic composition, ivory accents, time rift wanderer style'
  }
})
