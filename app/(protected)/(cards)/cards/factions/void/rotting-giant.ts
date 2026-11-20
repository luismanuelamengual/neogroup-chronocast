import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rotting-giant',
  type: 'ally',
  name: 'Rotting Giant',
  text: '',
  flavor: 'The smell holds the line better than the shield.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 60,
  cost: 4,
  attack: 14,
  health: 34,
  keywords: ['guardian'],
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject: 'a huge decaying giant with green glowing cracks in its skin holding a broken gravestone as a shield'
  }
})
