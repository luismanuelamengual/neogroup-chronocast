import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chrono-battery',
  type: 'item',
  name: 'Chrono Battery',
  text: 'Gain 2 Chronos. Instant.',
  flavor: 'Bottled time. Shake before use.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 150,
  cost: 1,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject: 'a glass cylinder full of swirling turquoise energy with brass caps, crackling'
  }
})
