import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, discardSize, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gate-of-oblivion',
  type: 'location',
  name: 'Gate of Oblivion',
  text: 'At the start of each phase, deal 5 damage to a random enemy ally. If your discard pile has 10 or more cards, a random ally of your discard pile returns to play.',
  flavor: 'What goes in never comes back. Mostly.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'legendary',
  price: 5250,
  cost: 5,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 5)

    if (discardSize(ctx, ctx.owner) >= 10) {
      reviveFromDiscard(ctx, ctx.owner)
    }
  },
  ai: { value: 7, tags: ['removal', 'revive'] },
  art: {
    subject: 'an enormous ancient gate in space made of black stone, a swirling vortex of green and violet inside'
  }
})
