import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pilgrim-of-dusk',
  type: 'ally',
  name: 'Pilgrim of Dusk',
  text: 'When it enters: you gain 1 Chronos this phase.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'shadow',
  price: 50,
  cost: 2,
  keywords: ['shield'],
  attack: 3,
  health: 3,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject: 'a time-traveling adventurer, the pilgrim of dusk, raising its weapon, time rift wanderer style'
  }
})
