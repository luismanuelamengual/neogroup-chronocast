import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'longbow-of-the-silent-trail',
  type: 'weapon',
  name: 'Longbow of the Silent Trail',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 40,
  cost: 1,
  keywords: ['poison'],
  attack: 1,
  durability: 2,
  ai: { value: 1 },
  art: {
    subject: 'Longbow of the Silent Trail: a single longbow weapon floating in dramatic light, hunter style'
  }
})
