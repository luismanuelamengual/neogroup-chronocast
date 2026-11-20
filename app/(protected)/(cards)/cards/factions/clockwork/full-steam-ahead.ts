import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'full-steam-ahead',
  type: 'ability',
  name: 'Full Steam Ahead',
  text: 'Your allies gain +3 attack and +3 health and gain 1 Chronos.',
  flavor: 'All engines, now!',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 3, 3)
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['buff', 'ramp'] },
  art: {
    subject: 'a fleet of steam machines and robots charging forward together under a cloud of steam'
  }
})
