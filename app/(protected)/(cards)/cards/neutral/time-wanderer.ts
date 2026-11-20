import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'time-wanderer',
  type: 'ally',
  name: 'Time Wanderer',
  text: '',
  flavor: 'Lost somewhere between yesterday and tomorrow.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 6,
  health: 10,
  ai: { value: 1 },
  art: {
    subject: 'a cheerful traveler in a patched coat covered in pocket watches, walking out of a swirling time portal'
  }
})
