import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, damageEnemyHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-of-flame',
  type: 'artifact',
  name: 'Lantern of Flame',
  text: 'At the start of each phase: deal 2 fire damage to the enemy hero for each other artifact of yours. (2 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  element: 'fire',
  price: 160,
  cost: 3,
  charges: 2,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 2 * Math.max(0, artifactCount(ctx) - 1), 'fire')
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Lantern of Flame: an ancient lantern made of crystal and silver filigree, wreathed in roaring flames, standing among ancient trees, swirling around the center, scarlet accents, mage style'
  }
})
