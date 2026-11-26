import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'brass-golem-of-gears',
  type: 'ally',
  name: 'Brass Golem of Gears',
  text: '',
  flavor: 'Ten thousand gears, one purpose.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['eclipse'] },
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
    subject:
      'Brass Golem of Gears: a golem built of riveted copper with green patina, with a smoking chimney, turning its lens toward the viewer, steampunk steam era style'
  }
})
