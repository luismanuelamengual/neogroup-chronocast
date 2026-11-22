import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'timeless-fortune-teller',
  type: 'ally',
  name: 'Timeless Fortune Teller',
  text: 'When it enters: you gain 1 Chronos this phase.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'time',
  price: 40,
  cost: 1,
  tribe: 'drifter',
  keywords: ['ranged'],
  attack: 2,
  health: 3,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['aggro', 'ramp'] },
  art: {
    subject: 'a time-traveling wanderer, the timeless fortune teller, standing guard, time rift wanderer style'
  }
})
