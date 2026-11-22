import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-fortune-teller',
  type: 'ally',
  name: 'Armored Fortune Teller',
  text: 'After it takes damage: it gains +2 attack.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  keywords: ['charge'],
  attack: 1,
  health: 5,
  onDamaged(ctx) {
    buffSelf(ctx, 2, 0)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject: 'a time-traveling adventurer, the armored fortune teller, standing guard, warrior style'
  }
})
