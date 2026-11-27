import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { banishFromDiscard, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'soul-tithe',
  type: 'ability',
  subtype: 'ritual',
  name: 'Soul Tithe',
  text: 'Each player banishes the last 3 cards of their discard pile. Draw a card for each enemy card banished.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  onPlay(ctx) {
    banishFromDiscard(ctx, ctx.owner, 3)
    draw(ctx, ctx.owner, banishFromDiscard(ctx, ctx.opponent, 3))
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Soul Tithe: ghostly coins and souls drifting from two piles of bones into a black chalice, close-up, acid green accents, dark end-of-time void style'
  }
})
