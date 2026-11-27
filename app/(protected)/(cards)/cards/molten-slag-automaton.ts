import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'molten-slag-automaton',
  type: 'ally',
  name: 'Molten Slag Automaton',
  text: 'Its thorns are of fire: they burn whoever attacks it.',
  flavor: 'Touch it once. Only once.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 160,
  cost: 5,
  tribe: 'automaton',
  element: 'fire',
  keywords: ['thorns'],
  attack: 6,
  health: 11,
  thorns: 2,
  thornsElement: 'fire',
  ai: { value: 5 },
  art: {
    subject:
      'Molten Slag Automaton: a hulking iron automaton dripping molten slag from its joints, glowing furnace chest, full body, ember red accents, steampunk steam era style'
  }
})
