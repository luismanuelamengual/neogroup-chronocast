import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'security-drone',
  type: 'ally',
  name: 'Security Drone',
  text: '',
  flavor: 'Please remain still while you are being scanned.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 7,
  health: 12,
  keywords: ['flying', 'ranged'],
  ai: { value: 2 },
  art: {
    subject: 'a sleek white security drone with a red scanning beam hovering in a neon corridor'
  }
})
