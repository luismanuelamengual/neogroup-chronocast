import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'lightbringer',
  type: 'weapon',
  name: 'Lightbringer',
  text: '',
  flavor: 'It cuts the darkness itself.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 12,
  durability: 3,
  keywords: ['lifesteal'],
  ai: { value: 5 },
  art: {
    subject: 'a radiant white and gold sword shining so bright the shadows around it flee'
  }
})
