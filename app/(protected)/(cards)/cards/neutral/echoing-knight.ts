import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'echoing-knight',
  type: 'ally',
  name: 'Echoing Knight',
  text: '',
  flavor: 'Defeat him once, and he comes back a moment earlier.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 10,
  health: 18,
  keywords: ['echo'],
  ai: { value: 3 },
  art: {
    subject: 'a translucent knight with several faded copies of himself overlapping, raising a sword'
  }
})
