import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'archive-guardian',
  type: 'ally',
  name: 'Archive Guardian',
  text: 'On enter: draw a card and your hero gains 5 armor.',
  flavor: 'Silence in the library. Or else.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 12,
  health: 15,
  keywords: ['guardian'],
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
    gainArmor(ctx, ctx.owner, 5)
  },
  ai: { value: 5, tags: ['draw', 'defense'] },
  art: {
    subject: 'a stern armored librarian with a giant tome chained to her shield, standing among towering bookshelves'
  }
})
