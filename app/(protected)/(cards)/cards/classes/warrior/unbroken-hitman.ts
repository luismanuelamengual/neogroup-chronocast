import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unbroken-hitman',
  type: 'ally',
  name: 'Unbroken Hitman',
  text: 'When it attacks: it gains +1 attack.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 690,
  cost: 5,
  tribe: 'enforcer',
  keywords: ['thorns'],
  thorns: 4,
  attack: 6,
  health: 11,
  onAttack(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 6, tags: ['buff'] },
  art: {
    subject: 'a cyberpunk street criminal, the unbroken hitman, raising its weapon, warrior style'
  }
})
