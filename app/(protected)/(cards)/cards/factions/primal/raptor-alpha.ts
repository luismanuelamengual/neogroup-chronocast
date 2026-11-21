import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'raptor-alpha',
  type: 'ally',
  name: 'Raptor Alpha',
  text: 'On enter: your other allies gain +2 attack.',
  flavor: 'One call, and the whole pack comes running.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 14,
  health: 10,
  keywords: ['quick'],
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 2, 0, true)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'a scarred raptor with bright feathers screeching from a rock as the pack gathers below'
  }
})
