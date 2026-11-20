import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'blessed-mail',
  type: 'armor',
  name: 'Blessed Mail',
  text: '',
  flavor: 'Each ring was blessed by a different saint.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 20,
  ai: { value: 3 },
  art: {
    subject: 'a shining chainmail coat with holy symbols glowing on it'
  }
})
