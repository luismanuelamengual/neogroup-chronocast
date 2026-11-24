import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gentle-return',
  type: 'ability',
  name: 'Gentle Return',
  text: 'A random ally of your discard pile returns to play and your hero heals 4. Slow.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 65,
  cost: 4,
  speed: 'slow',
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    healHero(ctx, 4)
  },
  ai: { value: 4, tags: ['heal', 'revive'] },
  art: {
    subject:
      'Gentle Return: a swirling vortex pulling objects backward in time, over a stormy battlefield, close-up filling the frame, scarlet accents, mystic healer style'
  }
})
