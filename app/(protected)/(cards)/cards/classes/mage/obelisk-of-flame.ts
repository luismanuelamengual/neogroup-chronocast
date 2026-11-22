import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'obelisk-of-flame',
  type: 'artifact',
  name: 'Obelisk of Flame',
  text: 'At the start of each phase: deal 2 fire damage to the enemy hero. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'fire',
  price: 65,
  cost: 4,
  charges: 3,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 2)
    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject: 'Obelisk of Flame: a single mysterious flame artifact glowing on a pedestal, mage style'
  }
})
