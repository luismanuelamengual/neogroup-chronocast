import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'inventor-of-hours',
  type: 'ally',
  name: 'Inventor of Hours',
  text: 'At the start of each phase, gain 1 Chronos.',
  flavor: 'He invented the twenty-fifth hour. Nobody else can find it.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 12,
  health: 26,
  ability: {
    name: 'Time Spring',
    text: 'Draw 2 cards.',
    cost: 3,
    activate(ctx) {
      draw(ctx, ctx.owner, 2)
    }
  },
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['ability', 'ramp'] },
  art: {
    subject: 'an eccentric inventor surrounded by floating clock faces, building a machine that bends time'
  }
})
