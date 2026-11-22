import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'scarred-raptor',
  type: 'ally',
  name: 'Scarred Raptor',
  text: '',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  weak: ['ice'],
  price: 50,
  cost: 2,
  tribe: 'saurian',
  attack: 3,
  health: 7,
  ai: { value: 2 },
  art: {
    subject: 'a dinosaur, the scarred raptor, charging into battle, prehistoric jungle era style'
  }
})
