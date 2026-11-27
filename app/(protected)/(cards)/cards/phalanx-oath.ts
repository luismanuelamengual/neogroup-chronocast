import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'phalanx-oath',
  type: 'artifact',
  name: 'Phalanx Oath',
  text: 'At the start of each phase, if you have at least one ally: your hero heals 2.',
  flavor: 'Together we stand. Alone we fall.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'common',
  price: 60,
  cost: 3,
  onPhaseStart(ctx) {
    if (alliesOf(ctx, ctx.owner).length > 0) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Phalanx Oath: a row of interlocked bronze shields carved into a stone tablet, an oath inscribed above them, warm sunset light, gold accents, ancient bronze-age empire style'
  }
})
