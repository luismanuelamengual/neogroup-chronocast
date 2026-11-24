import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brass-golem-of-coal',
  type: 'ally',
  name: 'Brass Golem of Coal',
  text: 'When another Automaton of yours enters: it gains +1 attack and +1 health.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  element: 'earth',
  resist: ['acid'],
  weak: ['lightning'],
  price: 155,
  cost: 2,
  tribe: 'automaton',
  keywords: ['guardian'],
  attack: 1,
  health: 5,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'automaton')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 2, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Brass Golem of Coal: a golem built of white plating with magenta glow, with a single giant lens, banking through the air, steampunk steam era style'
  }
})
