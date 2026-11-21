import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rift-behemoth',
  type: 'ally',
  name: 'Rift Behemoth',
  text: '',
  flavor: 'When it walks, centuries tremble.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 5750,
  cost: 7,
  attack: 30,
  health: 30,
  keywords: ['cleave', 'guardian'],
  ai: { value: 8, tags: ['defense'] },
  art: {
    subject: 'a colossal beast made of rock and turquoise rift energy, smashing through ruins of several eras'
  }
})
