import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'relic-of-the-ancestors',
  type: 'artifact',
  name: 'Relic of the Ancestors',
  text: 'At the start of each phase: deal 2 light damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'legendary',
  element: 'light',
  price: 4000,
  cost: 1,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'Relic of the Ancestors: a single mysterious ancestors artifact glowing on a pedestal, mystic healer style'
  }
})
