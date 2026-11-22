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
      'an ancient bronze-armored soldier, the standard-bearer of the laurel, glaring at the viewer, ancient bronze-age empire style'
  }
})
