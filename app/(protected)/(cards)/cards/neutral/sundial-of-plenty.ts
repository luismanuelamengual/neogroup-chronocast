import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sundial-of-plenty',
  type: 'artifact',
  name: 'Sundial of Plenty',
  text: 'Artifact. At the start of each phase, you gain 1 Chronos.',
  flavor: 'Its shadow always points to now.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 650,
  cost: 3,
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject: 'a golden sundial on a marble pedestal, its shadow made of flowing sand and light'
  }
})
