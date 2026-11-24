import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'cyber-hound-of-the-grid',
  type: 'ally',
  name: 'Cyber Hound of the Grid',
  text: '',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  weak: ['lightning'],
  price: 50,
  cost: 2,
  tribe: 'cyborg',
  keywords: ['quick'],
  attack: 3,
  health: 6,
  ai: { value: 2 },
  art: {
    subject:
      'Cyber Hound of the Grid: a hound built of black iron with glowing coals, with bolted armor plates, hovering above the ground, neon cyberpunk future style'
  }
})
