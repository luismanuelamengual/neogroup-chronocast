import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'totem-of-coal',
  type: 'artifact',
  name: 'Totem of Coal',
  text: 'When a Inventor of yours enters: it gains +1 attack and +2 health.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 65,
  cost: 4,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'inventor')) {
      buff(ctx, ally, 1, 2)
    }
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject: 'Totem of Coal: a single mysterious coal artifact glowing on a pedestal, steampunk steam era style'
  }
})
