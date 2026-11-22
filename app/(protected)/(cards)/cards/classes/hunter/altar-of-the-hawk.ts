import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'altar-of-the-hawk',
  type: 'artifact',
  name: 'Altar of the Hawk',
  text: 'At the start of each phase: your hero gains 1 energy.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'legendary',
  price: 4400,
  cost: 2,
  onPhaseStart(ctx) {
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['energy'] },
  art: {
    subject: 'Altar of the Hawk: a single mysterious hawk artifact glowing on a pedestal, hunter style'
  }
})
