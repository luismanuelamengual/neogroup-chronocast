import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'candle-keeper',
  type: 'ally',
  name: 'Candle Keeper',
  text: 'When it dies: draw a card.',
  flavor: 'When his candle goes out, a new page turns.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 6,
  health: 8,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'an old librarian carrying a tall candelabra through endless shelves of magic books'
  }
})
