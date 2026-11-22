import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'moonlit-wisp',
  type: 'ally',
  name: 'Moonlit Wisp',
  text: 'When it enters: draw a card.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 50,
  cost: 2,
  tribe: 'fae',
  keywords: ['ranged'],
  attack: 1,
  health: 6,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a fairy-tale fae creature, the moonlit wisp, standing guard, medieval magic order style'
  }
})
