import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, sacrificeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pact-keeper',
  type: 'ally',
  name: 'Pact Keeper',
  text: 'On enter: destroy your weakest other ally: if you do, draw 2 cards.',
  flavor: 'Sign here. And here. And here.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 6,
  health: 7,
  onEnter(ctx) {
    if (sacrificeAlly(ctx)) {
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a grinning demon accountant holding a glowing contract and a quill made of bone'
  }
})
