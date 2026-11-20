import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-the-cohort',
  type: 'ability',
  name: 'Rally the Cohort',
  text: 'Your allies gain +2 attack and +4 health.',
  flavor: 'The horn sounds. Every shield turns.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 2, 4)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a centurion blowing a curved bronze horn while legionaries regroup around him'
  }
})
