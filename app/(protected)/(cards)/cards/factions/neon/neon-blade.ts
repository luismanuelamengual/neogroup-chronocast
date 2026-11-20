import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'neon-blade',
  type: 'ally',
  name: 'Neon Blade',
  text: '',
  flavor: 'The faster the cut, the brighter the glow.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 8,
  health: 10,
  keywords: ['quick'],
  ai: { value: 2 },
  art: {
    subject: 'a cyber ninja with a glowing magenta katana slicing through raindrops on a rooftop'
  }
})
