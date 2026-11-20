import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'gladiator-twins',
  type: 'ally',
  name: 'Gladiator Twins',
  text: '',
  flavor: 'Nobody remembers which one won. Both did.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 7,
  health: 16,
  keywords: ['frenzy'],
  ai: { value: 3 },
  art: {
    subject: 'two identical gladiator brothers back to back with short swords and small shields in a roaring arena'
  }
})
