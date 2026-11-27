import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, enhancedAllies, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'implant-clinic',
  type: 'artifact',
  name: 'Implant Clinic',
  text: 'At the start of each phase: if you have an Enhanced ally, draw a card. (3 uses)',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    if (enhancedAllies(ctx, ctx.owner).length > 0) {
      draw(ctx, ctx.owner, 1)
      spendCharge(ctx)
    }
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Implant Clinic: a cramped back-alley cyber clinic with a surgical chair under flickering neon signs, neon cyberpunk future style'
  }
})
