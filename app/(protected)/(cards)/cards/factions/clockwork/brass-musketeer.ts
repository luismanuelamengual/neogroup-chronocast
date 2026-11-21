import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'brass-musketeer',
  type: 'ally',
  name: 'Brass Musketeer',
  text: '',
  flavor: 'One shot, one puff of smoke, one less problem.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 11,
  health: 9,
  keywords: ['ranged'],
  ai: { value: 3 },
  art: {
    subject: 'a Victorian musketeer with a brass mechanical arm aiming a long steam-powered rifle'
  }
})
