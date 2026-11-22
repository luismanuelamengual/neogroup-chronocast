import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unbroken-merchant',
  type: 'ally',
  name: 'Unbroken Merchant',
  text: 'When it attacks: it gains +1 attack.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  keywords: ['cleave'],
  attack: 4,
  health: 4,
  onAttack(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a time-traveling adventurer, the unbroken merchant, roaring, warrior style'
  }
})
