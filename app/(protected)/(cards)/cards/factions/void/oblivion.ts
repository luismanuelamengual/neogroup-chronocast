import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt, discardSize, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'oblivion',
  type: 'ability',
  name: 'Oblivion',
  text: 'Destroy an enemy ally. If your discard pile has 6 or more cards, draw a card. Slow.',
  flavor: 'Not dead. Simply never was.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  speed: 'slow',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    destroyAt(ctx, ctx.targets[0])

    if (discardSize(ctx, ctx.owner) >= 6) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 6, tags: ['removal', 'draw'] },
  art: {
    subject: 'a creature being erased from reality into a swirling black vortex, its outline fading'
  }
})
