import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'court-illusionist',
  type: 'ally',
  name: 'Court Illusionist',
  text: 'On enter: draw a card.',
  flavor: 'Is she really there? Ask her. Wait, where did she go?',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 9,
  health: 14,
  keywords: ['stealth'],
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a smirking illusionist in a harlequin robe splitting into several mirror copies of herself'
  }
})
