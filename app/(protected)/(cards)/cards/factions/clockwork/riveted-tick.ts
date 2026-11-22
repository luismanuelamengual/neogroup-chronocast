import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'riveted-tick',
  type: 'ability',
  name: 'Riveted Tick',
  text: 'You gain 4 Chronos this phase. Instant.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'epic',
  price: 1560,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 4)
  },
  ai: { value: 3, tags: ['ramp'] },
  art: {
    subject: 'Riveted Tick: a giant hourglass with sand flowing upward, steampunk steam era style'
  }
})
