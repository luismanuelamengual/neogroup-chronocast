import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'veteran-of-the-shieldwall',
  type: 'ally',
  name: 'Veteran of the Shieldwall',
  text: 'When it attacks: it gains +1 attack.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'legionnaire',
  keywords: ['guardian'],
  attack: 3,
  health: 11,
  onAttack(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'an ancient bronze-armored soldier, the veteran of the shieldwall, charging into battle, warrior style'
  }
})
