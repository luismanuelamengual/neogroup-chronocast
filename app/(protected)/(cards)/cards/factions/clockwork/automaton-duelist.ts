import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'automaton-duelist',
  type: 'ally',
  name: 'Automaton Duelist',
  text: '',
  flavor: 'Programmed for elegance. And for stabbing.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 10,
  health: 9,
  keywords: ['quick', 'frenzy'],
  ai: { value: 4 },
  art: {
    subject: 'an elegant slim automaton fencer in a brass tailcoat lunging with two rapiers'
  }
})
