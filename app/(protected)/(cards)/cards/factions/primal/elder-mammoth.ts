import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'elder-mammoth',
  type: 'ally',
  name: 'Elder Mammoth',
  text: '',
  flavor: 'The ground remembers every step it takes.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 200,
  cost: 5,
  attack: 20,
  health: 45,
  keywords: ['cleave'],
  ai: { value: 5 },
  art: {
    subject:
      'a gigantic woolly mammoth with huge curved tusks decorated with tribal rings, trumpeting in a snowy valley'
  }
})
