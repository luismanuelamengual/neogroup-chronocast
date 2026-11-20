import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wandering-sellsword',
  type: 'ally',
  name: 'Wandering Sellsword',
  text: '',
  flavor: 'Paid in any currency of any century.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 3,
  attack: 14,
  health: 20,
  ai: { value: 3 },
  art: {
    subject:
      'a confident mercenary with a mismatched armor of samurai, viking and knight pieces, resting a greatsword on the shoulder'
  }
})
