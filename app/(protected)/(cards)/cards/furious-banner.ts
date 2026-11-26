import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'furious-banner',
  type: 'artifact',
  name: 'Furious Banner',
  text: 'At the start of each phase: deal 2 damage to the enemy hero. (3 uses)',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  charges: 3,
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 2)
    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject:
      'Furious Banner: an ancient banner made of blackened iron with gold inlay, standing in a ruined temple, framed by drifting embers, amber accents, warrior style'
  }
})
