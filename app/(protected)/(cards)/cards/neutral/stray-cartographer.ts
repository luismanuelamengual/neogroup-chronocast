import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stray-cartographer',
  type: 'ally',
  name: 'Stray Cartographer',
  text: 'When it enters: you gain 1 Chronos this phase.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 450,
  cost: 1,
  attack: 2,
  health: 5,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['aggro', 'ramp'] },
  art: {
    subject: 'a time-traveling adventurer, the stray cartographer, mid-leap, time rift wanderer style'
  }
})
