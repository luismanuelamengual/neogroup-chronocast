import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'phalanx-of-bronze',
  type: 'ally',
  name: 'Phalanx of Bronze',
  text: '',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'legionnaire',
  attack: 6,
  health: 9,
  ai: { value: 4 },
  art: {
    subject:
      'an ancient bronze-armored soldier, the phalanx of bronze, crouching, ready to strike, ancient bronze-age empire style'
  }
})
