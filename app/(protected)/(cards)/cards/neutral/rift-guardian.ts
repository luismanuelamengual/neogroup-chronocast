import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rift-guardian',
  type: 'ally',
  name: 'Rift Guardian',
  text: '',
  flavor: 'Nothing passes. Not even time.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 3,
  attack: 6,
  health: 28,
  keywords: ['guardian'],
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'a massive stone golem with a glowing turquoise rift in its chest, planting a huge round shield on the ground'
  }
})
