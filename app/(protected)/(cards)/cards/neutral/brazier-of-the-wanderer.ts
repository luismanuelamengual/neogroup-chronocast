import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brazier-of-the-wanderer',
  type: 'artifact',
  name: 'Brazier of the Wanderer',
  text: 'At the start of each phase: deal 1 damage to the enemy hero. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 40,
  cost: 1,
  charges: 3,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 1)
    spendCharge(ctx)
  },
  ai: { value: 1, tags: ['aggro'] },
  art: {
    subject:
      'Brazier of the Wanderer: a single mysterious wanderer artifact glowing on a pedestal, time rift wanderer style'
  }
})
