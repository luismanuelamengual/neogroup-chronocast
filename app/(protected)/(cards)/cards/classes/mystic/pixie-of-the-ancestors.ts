import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pixie-of-the-ancestors',
  type: 'ally',
  name: 'Pixie of the Ancestors',
  text: 'When it dies: a random ally of your discard pile returns to play.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 70,
  cost: 5,
  tribe: 'fae',
  keywords: ['guardian'],
  attack: 4,
  health: 11,
  onDeath(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 5, tags: ['revive'] },
  art: {
    subject: 'a fairy-tale fae creature, the pixie of the ancestors, roaring, mystic healer style'
  }
})
