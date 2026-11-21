import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'gear-drone',
  type: 'ally',
  name: 'Gear Drone',
  text: '',
  flavor: 'Wind it up and let it go. It knows the way.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 4,
  health: 4,
  keywords: ['flying'],
  ai: { value: 1 },
  art: {
    subject: 'a small round brass drone with spinning propellers and a single glowing lens, buzzing through steam'
  }
})
