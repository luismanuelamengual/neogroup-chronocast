import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pact-of-hunger',
  type: 'ability',
  name: 'Pact of Hunger',
  text: 'Your hero loses 4 health. Draw 2 cards.',
  flavor: 'The void feeds you. Then it feeds on you.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 55,
  cost: 1,
  onPlay(ctx) {
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 4)
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a shadowy hand offering two glowing cards from a swirling purple void, a drop of blood falling'
  }
})
