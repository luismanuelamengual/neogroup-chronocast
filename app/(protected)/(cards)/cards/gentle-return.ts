import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gentle-return',
  type: 'ability',
  subtype: 'ritual',
  name: 'Gentle Return',
  text: 'Your hero heals 1 for each card in your discard pile (up to 10). Slow.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['dawn'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  speed: 'slow',
  onPlay(ctx) {
    healHero(ctx, Math.min(10, discardSize(ctx, ctx.owner)))
  },
  ai: { value: 4, tags: ['heal', 'revive'] },
  art: {
    subject:
      'Gentle Return: a swirling vortex pulling objects backward in time, over a stormy battlefield, close-up filling the frame, scarlet accents, mystic healer style'
  }
})
