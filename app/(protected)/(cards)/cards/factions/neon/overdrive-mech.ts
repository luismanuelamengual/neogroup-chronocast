import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'overdrive-mech',
  type: 'ally',
  name: 'Overdrive Mech',
  text: '',
  flavor: 'Safety limits removed.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  price: 675,
  cost: 6,
  attack: 22,
  health: 44,
  keywords: ['charge', 'quick'],
  ai: { value: 7, tags: ['aggro'] },
  art: {
    subject: 'a combat mech glowing red with its vents open, rocketing forward with a massive energy fist'
  }
})
