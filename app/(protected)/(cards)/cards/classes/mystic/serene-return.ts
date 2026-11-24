import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'serene-return',
  type: 'ability',
  name: 'Serene Return',
  text: 'A random ally of your discard pile returns to play and your hero heals 4. Slow.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'epic',
  price: 2040,
  cost: 5,
  speed: 'slow',
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    healHero(ctx, 4)
  },
  ai: { value: 6, tags: ['heal', 'revive'] },
  art: {
    subject:
      'Serene Return: a swirling vortex pulling objects backward in time, in a ruined temple, seen from above, emerald accents, mystic healer style'
  }
})
