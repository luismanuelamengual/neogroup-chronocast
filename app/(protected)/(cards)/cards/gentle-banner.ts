import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gentle-banner',
  type: 'artifact',
  name: 'Gentle Banner',
  text: 'When a Oracle of yours enters: it gains +1 attack and +2 health.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
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
    subject:
      'Gentle Banner: an ancient banner made of ivory and jade, standing on a windy cliff, dramatic backlight, gold accents, mystic healer style'
  }
})
