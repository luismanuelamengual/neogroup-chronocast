import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'luminous-resurrection',
  type: 'ability',
  name: 'Luminous Resurrection',
  text: 'A random ally of your discard pile returns to play and your hero heals 4. Slow.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'legendary',
  price: 5600,
  cost: 5,
  speed: 'slow',
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    healHero(ctx, 4)
  },
  ai: { value: 7, tags: ['heal', 'revive'] },
  art: {
    subject:
      'Luminous Resurrection: a beam of light lifting from an open grave, in a dark forest clearing, framed by drifting embers, violet accents, mystic healer style'
  }
})
