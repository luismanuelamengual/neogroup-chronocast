import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchantress-of-the-tower',
  type: 'ally',
  name: 'Enchantress of the Tower',
  text: 'When it enters: draw a card.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['arcane'],
  price: 50,
  cost: 2,
  tribe: 'magus',
  keywords: ['shield'],
  attack: 3,
  health: 3,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a medieval spellcaster, the enchantress of the tower, roaring, medieval magic order style'
  }
})
