import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'fang-the-sabertooth',
  type: 'ally',
  reward: true,
  name: 'Fang, the Sabertooth',
  text: '',
  flavor: "Kora's oldest friend, and her sharpest.",
  faction: 'primal',
  restriction: { heroes: ['kora-wildfang'] },
  rarity: 'legendary',
  cost: 4,
  tribe: 'beast',
  keywords: ['unique', 'charge', 'quick'],
  attack: 7,
  health: 9,
  ai: { value: 5 },
  art: {
    subject: 'a massive sabertooth tiger with scars and a bone collar, leaping out of tall grass with fangs bared'
  }
})
