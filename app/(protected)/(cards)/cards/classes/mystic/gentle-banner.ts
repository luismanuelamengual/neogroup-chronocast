import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gentle-banner',
  type: 'artifact',
  name: 'Gentle Banner',
  text: 'When a Oracle of yours enters: it gains +1 attack and +2 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 65,
  cost: 4,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'oracle')) {
      buff(ctx, ally, 1, 2)
    }
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject: 'Gentle Banner: a single mysterious banner artifact glowing on a pedestal, mystic healer style'
  }
})
