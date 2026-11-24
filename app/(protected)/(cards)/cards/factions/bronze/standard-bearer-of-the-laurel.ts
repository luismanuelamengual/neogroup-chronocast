import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'standard-bearer-of-the-laurel',
  type: 'ally',
  name: 'Standard-Bearer of the Laurel',
  text: 'When it enters: your hero gains 7 armor. At the start of each phase: your hero gains 2 armor.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'epic',
  price: 2040,
  cost: 5,
  tribe: 'legionnaire',
  keywords: ['shield'],
  attack: 6,
  health: 10,
  onEnter(ctx) {
    gainArmor(ctx, ctx.owner, 7)
  },
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject:
      'Standard-Bearer of the Laurel: a broad-shouldered adult man with sun-weathered bronze skin, ash brown hair in a wild mane, a full beard and an eyepatch, wearing a plain bronze helm, dressed in light skirmisher leathers with bronze bracers, raising an eagle standard, with wide-eyed wonder, turquoise accents, ancient bronze-age empire style'
  }
})
