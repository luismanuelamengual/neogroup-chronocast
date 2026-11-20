import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grand-triumph',
  type: 'ability',
  name: 'Grand Triumph',
  text: 'Your allies gain +4 attack and +6 health and your hero heals 10.',
  flavor: 'Rose petals, golden chariots, and a city on its feet.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 4, 6)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 10)
  },
  ai: { value: 6, tags: ['buff', 'heal'] },
  art: {
    subject: 'a triumphal parade through a Roman city, a general in a golden chariot, petals falling from balconies'
  }
})
