import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'altar-of-pistons',
  type: 'artifact',
  name: 'Altar of Pistons',
  text: 'At the start of each phase: your hero gains 1 energy.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'epic',
  price: 1400,
  cost: 1,
  onPhaseStart(ctx) {
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject: 'Altar of Pistons: a single mysterious pistons artifact glowing on a pedestal, steampunk steam era style'
  }
})
