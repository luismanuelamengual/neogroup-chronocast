import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'woolly-rhino',
  type: 'ally',
  name: 'Woolly Rhino',
  text: '',
  flavor: 'It does not stop. It does not know how.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 65,
  cost: 5,
  attack: 20,
  health: 20,
  keywords: ['charge'],
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject: 'a massive woolly rhinoceros charging through a snowy prehistoric valley'
  }
})
