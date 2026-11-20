import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, draw, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tome-of-endings',
  type: 'item',
  reward: true,
  name: 'Tome of Endings',
  text: 'Deal 10 damage to every enemy ally, a random ally of your discard pile returns to play and draw 2 cards.',
  flavor: 'Every story ends. This book knows how.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'malachar-the-unmade' },
  rarity: 'mythic',
  cost: 4,
  keywords: ['unique'],
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 10)
    reviveFromDiscard(ctx, ctx.owner)
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 7, tags: ['removal', 'revive', 'draw'] },
  art: {
    subject: 'an ancient black book with a cover made of void crystal, its pages showing the end of every era'
  }
})
