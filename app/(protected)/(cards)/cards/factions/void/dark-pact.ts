import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, heal, sacrificeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dark-pact',
  type: 'ability',
  name: 'Dark Pact',
  text: 'Destroy your weakest other ally: if you do, draw 2 cards and your hero heals 5.',
  flavor: 'Everything has a price. Pay it with someone else.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 45,
  cost: 1,
  onPlay(ctx) {
    if (sacrificeAlly(ctx)) {
      draw(ctx, ctx.owner, 2)
      heal(ctx, { player: ctx.owner, slot: 'hero' }, 5)
    }
  },
  ai: { value: 1, tags: ['draw', 'heal'] },
  art: {
    subject: 'two hands shaking over a glowing green contract, one of them a skeletal claw'
  }
})
