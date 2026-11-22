import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'sling-of-thorns',
  type: 'weapon',
  name: 'Sling of Thorns',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 630,
  cost: 4,
  keywords: ['ranged'],
  attack: 4,
  durability: 4,
  ai: { value: 5 },
  art: {
    subject: 'Sling of Thorns: a single sling weapon floating in dramatic light, hunter style'
  }
})
