import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'standard-bearer-of-the-laurel',
  type: 'ally',
  name: 'Standard-Bearer of the Laurel',
  text: 'When it enters: your hero heals 7. At the start of each phase: your hero heals 2.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'epic',
  price: 1300,
  cost: 5,
  tribe: 'legionnaire',
  keywords: ['shield'],
  attack: 6,
  health: 10,
  onEnter(ctx) {
    healHero(ctx, 7)
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject:
      'Standard-Bearer of the Laurel: a broad-shouldered adult man with sun-weathered bronze skin, ash brown hair in a wild mane, a full beard and an eyepatch, wearing a plain bronze helm, dressed in light skirmisher leathers with bronze bracers, raising an eagle standard, with wide-eyed wonder, turquoise accents, ancient bronze-age empire style'
  }
})
