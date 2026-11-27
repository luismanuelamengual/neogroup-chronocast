import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, discardSize } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grave-tyrant',
  type: 'ally',
  name: 'Grave Tyrant',
  text: 'When it enters: it gains +1 attack for every 2 cards in your discard pile (up to +8).',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'legendary',
  price: 2200,
  cost: 7,
  tribe: 'horror',
  keywords: ['unique'],
  attack: 6,
  health: 14,
  onEnter(ctx) {
    buffSelf(ctx, Math.min(8, Math.floor(discardSize(ctx, ctx.owner) / 2)), 0)
  },
  ai: { value: 7 },
  art: {
    subject:
      'Grave Tyrant: a colossal horror made of fused skeletons rising out of a mass grave, full body, dark violet accents, dark end-of-time void style'
  }
})
