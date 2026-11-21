import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'carrion-swarm',
  type: 'ally',
  name: 'Carrion Swarm',
  text: 'On enter: if your discard pile has 4 or more cards, draw a card.',
  flavor: 'They always know where the battle was.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 10,
  health: 6,
  keywords: ['flying'],
  onEnter(ctx) {
    if (discardSize(ctx, ctx.owner) >= 4) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a swarm of black crows with glowing green eyes circling over a battlefield of floating ruins'
  }
})
