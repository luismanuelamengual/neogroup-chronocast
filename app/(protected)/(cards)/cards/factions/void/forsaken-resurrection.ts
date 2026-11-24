import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'forsaken-resurrection',
  type: 'ability',
  name: 'Forsaken Resurrection',
  text: 'A random ally of your discard pile returns to play. Slow.',
  flavor: 'Back from the dead, and not happy about it.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  speed: 'slow',
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 3, tags: ['revive'] },
  art: {
    subject:
      'Forsaken Resurrection: a beam of light lifting from an open grave, in a sunlit meadow, framed by drifting embers, amber accents, dark end-of-time void style'
  }
})
