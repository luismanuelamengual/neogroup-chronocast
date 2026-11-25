import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'oiled-monolith',
  type: 'artifact',
  name: 'Oiled Monolith',
  text: 'When a Automaton of yours enters: it gains +1 attack and +2 health.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 510,
  cost: 2,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'automaton')) {
      buff(ctx, ally, 1, 2)
    }
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Oiled Monolith: an ancient monolith made of pale ash wood wrapped in red cloth, standing among ancient trees, dramatic backlight, tangerine accents, steampunk steam era style'
  }
})
