import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'chariot-racer',
  type: 'ally',
  name: 'Chariot Racer',
  text: '',
  flavor: 'Seven laps. No brakes.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 12,
  health: 7,
  keywords: ['charge'],
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject: 'a daring charioteer driving two galloping horses around the turn of a hippodrome, dust flying'
  }
})
