import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tomb-listener',
  type: 'ally',
  name: 'Tomb Listener',
  text: 'When it enters: draw a card for every 5 cards in your discard pile (up to 3).',
  flavor: 'The dead talk. She listens.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 6,
  health: 8,
  onEnter(ctx) {
    draw(ctx, ctx.owner, Math.min(3, Math.floor(discardSize(ctx, ctx.owner) / 5)))
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a pale hooded woman kneeling among tombstones, ghostly faces whispering into her ear'
  }
})
