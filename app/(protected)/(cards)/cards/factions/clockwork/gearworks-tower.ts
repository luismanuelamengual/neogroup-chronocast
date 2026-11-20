import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gearworks-tower',
  type: 'location',
  name: 'Gearworks Tower',
  text: 'At the start of each phase, gain 1 Chronos. At the end of each phase, your hero gains 3 armor.',
  flavor: 'Its bells ring every hour of every era.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  onPhaseEnd(ctx) {
    gainArmor(ctx, ctx.owner, 3)
  },
  ai: { value: 5, tags: ['ramp', 'defense'] },
  art: {
    subject: 'a tall Victorian tower made of enormous visible gears turning slowly, glowing clock faces on every side'
  }
})
