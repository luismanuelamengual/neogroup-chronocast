import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'scepter-of-storms',
  type: 'weapon',
  name: 'Scepter of Storms',
  text: '',
  flavor: 'It hums before the thunder.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 14,
  durability: 3,
  keywords: ['ranged', 'cleave'],
  ai: { value: 6 },
  art: {
    subject: 'a golden scepter with a storm cloud swirling inside a crystal orb, crackling with lightning'
  }
})
