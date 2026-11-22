import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ironsteam-exosuit',
  type: 'armor',
  reward: true,
  name: 'Ironsteam Exosuit',
  text: 'At the start of each phase: you gain 1 Chronos this phase.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'gideon-ironsteam' },
  rarity: 'legendary',
  cost: 5,
  keywords: ['unique'],
  armor: 16,
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 7, tags: ['ramp'] },
  art: {
    subject: 'a massive steam-powered brass exosuit armor with pipes, gauges and a glowing furnace in its chest'
  }
})
