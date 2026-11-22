import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'iron-terminal',
  type: 'artifact',
  name: 'Iron Terminal',
  text: 'At the start of each phase: your hero heals 3. (4 uses)',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  charges: 4,
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'Iron Terminal: a single mysterious terminal artifact glowing on a pedestal, warrior style'
  }
})
