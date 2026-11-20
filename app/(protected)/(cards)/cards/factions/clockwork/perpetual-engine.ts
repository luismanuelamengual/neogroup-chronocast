import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'perpetual-engine',
  type: 'ally',
  name: 'Perpetual Engine',
  text: 'At the start of each phase, gain 1 Chronos and draw a card.',
  flavor: 'It was never started. It will never stop.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 8,
  health: 34,
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['ramp', 'draw'] },
  art: {
    subject: 'a complex golden machine of endless spinning gears and glowing tubes running on its own'
  }
})
