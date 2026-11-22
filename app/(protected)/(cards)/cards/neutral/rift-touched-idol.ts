import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-touched-idol',
  type: 'artifact',
  name: 'Rift-Touched Idol',
  text: 'At the start of each phase: your hero heals 4. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 4,
  charges: 3,
  onPhaseStart(ctx) {
    healHero(ctx, 4)
    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject: 'Rift-Touched Idol: a single mysterious idol artifact glowing on a pedestal, time rift wanderer style'
  }
})
