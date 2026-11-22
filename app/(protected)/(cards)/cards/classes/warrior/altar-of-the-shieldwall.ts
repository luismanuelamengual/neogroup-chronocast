import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'altar-of-the-shieldwall',
  type: 'artifact',
  name: 'Altar of the Shieldwall',
  text: 'At the start of each phase: deal 2 damage to the enemy hero. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 2)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject: 'Altar of the Shieldwall: a single mysterious shieldwall artifact glowing on a pedestal, warrior style'
  }
})
