import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sundial-of-the-last-hour',
  type: 'artifact',
  name: 'Sundial of the Last Hour',
  text: 'At the start of each phase: your hero heals 3. (3 uses)',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 55,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Sundial of the Last Hour: a single mysterious hour artifact glowing on a pedestal, dark end-of-time void style'
  }
})
