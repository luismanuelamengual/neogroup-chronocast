import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'altar-of-the-shieldwall',
  type: 'artifact',
  name: 'Altar of the Shieldwall',
  text: 'At the start of each phase: deal 2 damage to the enemy hero. (3 uses)',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
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
    subject:
      'Altar of the Shieldwall: an ancient altar made of polished bronze with engraved spirals, standing in shallow water, dramatic backlight, saffron yellow accents, warrior style'
  }
})
