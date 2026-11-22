import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'precise-clockmaker',
  type: 'ally',
  name: 'Precise Clockmaker',
  text: 'When it enters: you gain 1 Chronos this phase.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  price: 690,
  cost: 5,
  tribe: 'inventor',
  attack: 6,
  health: 12,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['ramp'] },
  art: {
    subject: 'a steampunk inventor with goggles, the precise clockmaker, standing guard, steampunk steam era style'
  }
})
