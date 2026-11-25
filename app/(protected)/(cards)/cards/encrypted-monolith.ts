import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'encrypted-monolith',
  type: 'artifact',
  name: 'Encrypted Monolith',
  text: 'At the start of each phase: deal 2 earth damage to the enemy hero. (3 uses)',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  element: 'earth',
  price: 170,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 2)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject:
      'Encrypted Monolith: an ancient monolith made of crystal and silver filigree, bursting with jagged rocks and dust, standing on a floating rock, swirling around the center, violet accents, neon cyberpunk future style'
  }
})
