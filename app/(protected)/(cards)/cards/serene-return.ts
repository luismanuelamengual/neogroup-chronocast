import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveTopAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'serene-return',
  type: 'ability',
  subtype: 'ritual',
  name: 'Serene Return',
  text: 'Consume 5 (banish 5 cards of your discard pile). The last 2 allies of your discard pile return to play. Slow.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1300,
  cost: 5,
  speed: 'slow',
  onPlay(ctx) {
    reviveTopAlly(ctx, ctx.owner)
    reviveTopAlly(ctx, ctx.owner)
  },
  consume: 5,
  ai: { value: 6, tags: ['heal', 'revive'] },
  art: {
    subject:
      'Serene Return: a swirling vortex pulling objects backward in time, in a ruined temple, seen from above, emerald accents, mystic healer style'
  }
})
