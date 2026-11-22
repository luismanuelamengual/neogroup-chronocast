import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'altar-of-the-sun-temple',
  type: 'artifact',
  name: 'Altar of the Sun Temple',
  text: 'At the start of each phase: deal 2 light damage to the enemy hero. (4 uses)',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  element: 'light',
  price: 570,
  cost: 3,
  charges: 4,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 2)
    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject:
      'Altar of the Sun Temple: a single mysterious temple artifact glowing on a pedestal, ancient bronze-age empire style'
  }
})
