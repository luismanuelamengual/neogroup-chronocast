import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cog-apprentice',
  type: 'ally',
  name: 'Cog Apprentice',
  text: 'On enter: gain 1 Chronos.',
  flavor: 'Mind your fingers. The gears do not.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 4,
  health: 10,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['ramp'] },
  art: {
    subject: 'a young apprentice with oversized goggles and a wrench, oil on her face, fixing a ticking machine'
  }
})
