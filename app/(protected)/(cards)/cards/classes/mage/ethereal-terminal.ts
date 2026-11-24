import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ethereal-terminal',
  type: 'artifact',
  name: 'Ethereal Terminal',
  text: 'At the start of each phase: your hero heals 3. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 50,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Ethereal Terminal: an ancient terminal made of ivory and jade, standing on a floating rock, swirling around the center, gold accents, mage style'
  }
})
