import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'raptor-hatchling',
  type: 'ally',
  token: true,
  name: 'Raptor Hatchling',
  text: '',
  flavor: 'Born hungry.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  weak: ['ice'],
  cost: 1,
  tribe: 'saurian',
  keywords: ['charge'],
  attack: 2,
  health: 2,
  ai: { value: 1 },
  art: {
    subject: 'a tiny raptor hatchling bursting out of its egg, hissing, prehistoric jungle era style'
  }
})
