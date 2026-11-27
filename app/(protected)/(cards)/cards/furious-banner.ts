import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buff, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'furious-banner',
  type: 'artifact',
  name: 'Furious Banner',
  text: 'At the start of each phase: your allies with Guardian gain +1 attack. (3 uses)',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  charges: 3,
  onPhaseStart(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      if (unit.keywords.includes('guardian')) {
        buff(ctx, unit, 1, 0)
      }
    }

    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject:
      'Furious Banner: an ancient banner made of blackened iron with gold inlay, standing in a ruined temple, framed by drifting embers, amber accents, warrior style'
  }
})
