import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sundial-of-the-last-hour',
  type: 'artifact',
  name: 'Sundial of the Last Hour',
  text: 'At the start of each phase: your hero heals 3. (3 uses)',
  flavor: 'Its shadow points to the end.',
  faction: 'void',
  restriction: { factions: ['void'] },
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
      'Sundial of the Last Hour: an ancient sundial made of rusted iron and chains, standing on a floating rock, centered and seen from slightly below, tangerine accents, dark end-of-time void style'
  }
})
