import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'brass-behemoth',
  type: 'ally',
  name: 'Brass Behemoth',
  text: '',
  flavor: 'The factory built it. Then the factory was gone.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'epic',
  price: 2100,
  cost: 7,
  attack: 26,
  health: 30,
  keywords: ['guardian', 'cleave'],
  ai: { value: 8, tags: ['defense'] },
  art: {
    subject: 'a gigantic brass war machine with crushing claws stomping through a burning factory'
  }
})
