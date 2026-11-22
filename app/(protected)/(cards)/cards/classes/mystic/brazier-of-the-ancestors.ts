import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brazier-of-the-ancestors',
  type: 'artifact',
  name: 'Brazier of the Ancestors',
  text: 'At the start of each phase: your hero heals 3. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
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
      'Brazier of the Ancestors: a single mysterious ancestors artifact glowing on a pedestal, mystic healer style'
  }
})
