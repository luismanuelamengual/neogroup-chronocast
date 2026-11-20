import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'timeguard-plate',
  type: 'armor',
  name: 'Timeguard Plate',
  text: '',
  flavor: 'Forged to survive the end of time.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  armor: 28,
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject: 'a full suit of polished plate armor with clock gear engravings, standing in a hall'
  }
})
