import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brave-fortune-teller',
  type: 'ally',
  name: 'Brave Fortune Teller',
  text: 'After it takes damage: it gains +2 attack.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  attack: 5,
  health: 7,
  onDamaged(ctx) {
    buffSelf(ctx, 2, 0)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'a time-traveling adventurer, the brave fortune teller, standing guard, warrior style'
  }
})
