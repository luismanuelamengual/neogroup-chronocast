import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cogwork-courier',
  type: 'ally',
  name: 'Cogwork Courier',
  text: 'When it dies: draw 2 cards.',
  flavor: 'Delivery guaranteed. The courier, not so much.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 75,
  cost: 3,
  attack: 4,
  health: 8,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a little clockwork robot messenger with a leather satchel full of letters, running on spring legs'
  }
})
