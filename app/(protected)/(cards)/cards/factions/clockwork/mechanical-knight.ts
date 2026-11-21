import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'mechanical-knight',
  type: 'ally',
  name: 'Mechanical Knight',
  text: '',
  flavor: 'Polished, oiled and loyal to whoever holds the key.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 15,
  health: 16,
  keywords: ['shield'],
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject: 'a gleaming clockwork knight in brass armor with a key turning slowly in its back'
  }
})
