import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'feral-growth',
  type: 'ability',
  name: 'Feral Growth',
  text: 'An ally of yours gains +4 attack and +8 health.',
  flavor: 'Eat your greens. All of them.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 4, 8)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a small beast bursting with green energy, growing into a much bigger creature'
  }
})
