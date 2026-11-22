import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shifting-sands',
  type: 'artifact',
  name: 'Shifting Sands',
  text: 'Artifact. At the start of each phase, deal 2 damage to every enemy ally.',
  flavor: 'The ground itself forgets where it was.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  onPhaseStart(ctx) {
    damageAllAllies(ctx, ctx.opponent, 2)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a desert of swirling sand dunes with half-buried ruins and a sandstorm'
  }
})
