import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hallowed-deserter',
  type: 'ally',
  name: 'Hallowed Deserter',
  text: 'When it enters: your other allies gain +2 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  element: 'light',
  price: 190,
  cost: 4,
  keywords: ['shield'],
  attack: 4,
  health: 9,
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 0, 2, true)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'a time-traveling adventurer, the hallowed deserter, roaring, mystic healer style'
  }
})
