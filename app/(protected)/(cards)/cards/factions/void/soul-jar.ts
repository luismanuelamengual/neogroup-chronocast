import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, draw, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'soul-jar',
  type: 'item',
  name: 'Soul Jar',
  text: 'If your discard pile has 4 or more cards, draw 2 cards. Your hero heals 4.',
  flavor: 'Shake well before using. Then run.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPlay(ctx) {
    if (discardSize(ctx, ctx.owner) >= 4) {
      draw(ctx, ctx.owner, 2)
    }

    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 2, tags: ['draw', 'heal'] },
  art: {
    subject: 'a glass jar full of swirling green trapped souls, its cork sealed with dark wax'
  }
})
