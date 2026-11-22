import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'totem-of-the-herd',
  type: 'artifact',
  name: 'Totem of the Herd',
  text: 'At the start of each phase: your hero heals 3.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'epic',
  price: 1560,
  cost: 2,
  onPhaseStart(ctx) {
    healHero(ctx, 3)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'Totem of the Herd: a single mysterious herd artifact glowing on a pedestal, prehistoric jungle era style'
  }
})
