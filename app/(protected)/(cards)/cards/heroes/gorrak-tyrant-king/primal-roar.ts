import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buffThisPhase } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'primal-roar',
  type: 'ability',
  boss: true,
  name: 'Primal Roar',
  text: 'Your allies gain +7 attack this phase. Fast.',
  flavor: 'Every beast within a mile hears it, and obeys.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'gorrak-tyrant-king' },
  rarity: 'epic',
  cost: 3,
  speed: 'fast',
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      buffThisPhase(ctx, unit, 7)
    }
  },
  ai: { value: 3, tags: ['aggro'] },
  art: { subject: 'a shockwave of sound rippling through a jungle as dinosaurs and sabertooths charge together' }
})
