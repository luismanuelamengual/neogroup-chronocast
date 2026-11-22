import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-market',
  type: 'artifact',
  name: 'Rift Market',
  text: 'Artifact. At the start of each phase, gain 1 Chronos.',
  flavor: 'Everything is for sale. Especially time.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['ramp'] },
  art: {
    subject: 'a bustling market with stalls from many eras selling glowing bottles of time'
  }
})
