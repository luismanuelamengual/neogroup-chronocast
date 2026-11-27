import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pressure-valve',
  type: 'artifact',
  name: 'Pressure Valve',
  text: 'At the start of each phase: if you have 5 or more artifacts, deal 3 damage to the enemy hero.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 60,
  cost: 1,
  onPhaseStart(ctx) {
    if (artifactCount(ctx) >= 5) {
      damageEnemyHero(ctx, 3)
    }
  },
  ai: { value: 2, tags: ['aggro'] },
  art: {
    subject:
      'Pressure Valve: a red brass pressure valve with a trembling gauge needle in the red zone, venting steam, steampunk clockwork era style'
  }
})
