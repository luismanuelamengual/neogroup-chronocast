import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'robe-of-stars',
  type: 'armor',
  name: 'Robe of Stars',
  text: 'At the start of each phase, gain 1 Chronos.',
  flavor: 'Wear the night. Command the day.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  armor: 16,
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['ramp'] },
  art: {
    subject: 'a deep blue robe with real twinkling stars moving across its fabric'
  }
})
