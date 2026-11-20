import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'pulse-sniper',
  type: 'ally',
  name: 'Pulse Sniper',
  text: '',
  flavor: 'She aims at the future. Yours.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 14,
  health: 18,
  keywords: ['ranged', 'quick'],
  ai: { value: 4 },
  art: {
    subject: 'a sniper lying on a rooftop with a long glowing pulse rifle, a neon city skyline behind her'
  }
})
