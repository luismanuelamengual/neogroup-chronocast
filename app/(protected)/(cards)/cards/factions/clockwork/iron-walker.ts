import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'iron-walker',
  type: 'ally',
  name: 'Iron Walker',
  text: '',
  flavor: 'Slow, loud and absolutely unstoppable.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 65,
  cost: 5,
  attack: 20,
  health: 22,
  ai: { value: 5 },
  art: {
    subject: 'a giant two-legged walking steam machine with a cabin on top crossing a foggy city street'
  }
})
