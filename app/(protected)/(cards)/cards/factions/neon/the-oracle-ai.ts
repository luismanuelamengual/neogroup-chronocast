import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-oracle-ai',
  type: 'ally',
  name: 'The Oracle AI',
  text: 'On enter: draw 2 cards. At the start of each phase, draw a card.',
  flavor: 'It calculated every possible future. You lose in all of them.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'legendary',
  price: 5500,
  cost: 6,
  attack: 14,
  health: 40,
  keywords: ['unique'],
  onEnter(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 8, tags: ['draw'] },
  art: {
    subject: 'a giant glowing holographic face of an AI floating in a server cathedral full of cables and lights'
  }
})
