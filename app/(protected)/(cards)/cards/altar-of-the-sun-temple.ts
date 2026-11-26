import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'altar-of-the-sun-temple',
  type: 'artifact',
  name: 'Altar of the Sun Temple',
  text: 'At the start of each phase: deal 2 light damage to the enemy hero. (4 uses)',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'rare',
  element: 'light',
  price: 420,
  cost: 3,
  charges: 4,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 2)
    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject:
      'Altar of the Sun Temple: an ancient altar made of rough stone and sinew, radiating golden holy light, standing among ancient trees, swirling around the center, ivory accents, ancient bronze-age empire style'
  }
})
