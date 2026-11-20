import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'sabertooth-stalker',
  type: 'ally',
  name: 'Sabertooth Stalker',
  text: '',
  flavor: 'The grass moves. Then it is too late.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 12,
  health: 14,
  keywords: ['stealth'],
  ai: { value: 3 },
  art: {
    subject: 'a sabertooth cat crouching in tall golden grass, only its eyes and fangs visible'
  }
})
