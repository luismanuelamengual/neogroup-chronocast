import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-dawn-angel',
  type: 'ally',
  name: 'The Dawn Angel',
  text: 'When it enters: your hero heals 8 and a random ally of your discard pile returns to play.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'legendary',
  price: 2320,
  resist: ['arcane'],
  weak: ['shadow'],
  cost: 6,
  tribe: 'fae',
  keywords: ['flying', 'shield', 'unique'],
  attack: 7,
  health: 13,
  onEnter(ctx) {
    healHero(ctx, 8)
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 5, tags: ['heal', 'revive'] },
  art: {
    subject: 'a radiant angel with golden wings descending from the clouds at dawn, holding a sword of light'
  }
})
