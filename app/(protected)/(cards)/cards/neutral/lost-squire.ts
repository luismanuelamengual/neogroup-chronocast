import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'lost-squire',
  type: 'ally',
  name: 'Lost Squire',
  text: '',
  flavor: 'He was sent to fetch water. Six centuries ago.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 5,
  health: 6,
  ai: { value: 1 },
  art: {
    subject: 'a young squire in mismatched armor from different eras, holding a dented bucket and a short sword'
  }
})
