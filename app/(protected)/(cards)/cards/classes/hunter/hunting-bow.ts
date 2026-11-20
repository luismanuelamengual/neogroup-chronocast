import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hunting-bow',
  type: 'weapon',
  name: 'Hunting Bow',
  text: '',
  flavor: 'Bone, sinew and patience.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 60,
  cost: 2,
  attack: 7,
  durability: 4,
  keywords: ['ranged'],
  ai: { value: 2 },
  art: { subject: 'a curved hunting bow carved from mammoth bone and wrapped in leather, with feathered arrows' }
})
