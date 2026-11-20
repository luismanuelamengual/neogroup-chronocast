import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mechanical-heart',
  type: 'item',
  name: 'Mechanical Heart',
  text: 'An ally of yours gains +8 attack and +20 health and gain 2 Chronos.',
  flavor: 'It beats sixty times a minute, forever.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'legendary',
  price: 4750,
  cost: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 8, 20)
    gainChronos(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['buff', 'ramp'] },
  art: {
    subject: 'a glowing brass mechanical heart with tiny gears and valves beating inside a glass dome'
  }
})
