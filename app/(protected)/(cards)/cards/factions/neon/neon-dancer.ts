import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'neon-dancer',
  type: 'ally',
  name: 'Neon Dancer',
  text: '',
  flavor: 'She dodges bullets to the beat.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 8,
  health: 7,
  keywords: ['agile', 'quick'],
  ai: { value: 2 },
  art: {
    subject: 'a dancer in a glowing holographic outfit spinning between laser beams on a club stage'
  }
})
