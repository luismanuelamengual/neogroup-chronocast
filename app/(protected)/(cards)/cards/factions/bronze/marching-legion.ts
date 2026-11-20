import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'marching-legion',
  type: 'ally',
  name: 'Marching Legion',
  text: '',
  flavor: 'You hear them an hour before you see them.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 60,
  cost: 4,
  attack: 13,
  health: 32,
  keywords: ['guardian'],
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject: 'a column of legionaries marching in perfect formation through a mountain pass under eagle banners'
  }
})
