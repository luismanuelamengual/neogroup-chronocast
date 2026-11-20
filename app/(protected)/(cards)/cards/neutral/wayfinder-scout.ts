import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wayfinder-scout',
  type: 'ally',
  name: 'Wayfinder Scout',
  text: '',
  flavor: 'She maps the paths between the eras.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 9,
  health: 16,
  keywords: ['ranged'],
  ai: { value: 3 },
  art: {
    subject: 'a hooded scout with a compass glowing turquoise, aiming a crossbow from a cliff'
  }
})
