import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, discardSize, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unravel',
  type: 'ability',
  name: 'Unravel',
  text: 'Deal 8 damage to an enemy ally. If your discard pile has 5 or more cards, draw a card.',
  flavor: 'Pull one thread, and everything comes apart.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'malachar-the-unmade' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)

    if (discardSize(ctx, ctx.owner) >= 5) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2, tags: ['removal', 'draw'] },
  art: {
    subject: 'a creature unraveling into threads of black and green energy'
  }
})
