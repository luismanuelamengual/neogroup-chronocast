import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'boiler-brute',
  type: 'ally',
  name: 'Boiler Brute',
  text: '',
  flavor: 'Keep feeding it coal. Do not ask what happens if you stop.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 13,
  health: 13,
  ai: { value: 3 },
  art: {
    subject: 'a hulking automaton with a glowing furnace in its chest and huge piston fists'
  }
})
