import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chief-engineer-vance',
  type: 'ally',
  name: 'Chief Engineer Vance',
  text: 'When another ally of yours enters, it gains +2 attack and +4 health. On enter: gain 2 Chronos.',
  flavor: 'If it has gears, she can make it better.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  attack: 14,
  health: 34,
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 2, 4)
  },
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 2)
  },
  ai: { value: 6, tags: ['buff', 'ramp'] },
  art: {
    subject: 'a confident chief engineer with a mechanical arm and a blueprint, standing before a giant engine'
  }
})
