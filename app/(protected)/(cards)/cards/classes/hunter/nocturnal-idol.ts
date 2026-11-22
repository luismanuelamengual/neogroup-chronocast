import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nocturnal-idol',
  type: 'artifact',
  name: 'Nocturnal Idol',
  text: 'At the start of each phase: deal 2 shadow damage to the enemy hero. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  element: 'shadow',
  price: 170,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 2)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject: 'Nocturnal Idol: a single mysterious idol artifact glowing on a pedestal, hunter style'
  }
})
