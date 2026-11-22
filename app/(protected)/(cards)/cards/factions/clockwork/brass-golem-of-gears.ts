import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'brass-golem-of-gears',
  type: 'ally',
  name: 'Brass Golem of Gears',
  text: '',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  element: 'earth',
  resist: ['acid'],
  weak: ['lightning'],
  price: 65,
  cost: 4,
  tribe: 'automaton',
  keywords: ['shield'],
  attack: 5,
  health: 10,
  ai: { value: 4 },
  art: {
    subject: 'a steampunk brass automaton, the brass golem of gears, standing guard, steampunk steam era style'
  }
})
