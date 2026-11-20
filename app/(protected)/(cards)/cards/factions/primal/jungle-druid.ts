import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'jungle-druid',
  type: 'ally',
  name: 'Jungle Druid',
  text: 'At the start of each phase, your allies heal 4 and your allies gain +1 attack.',
  flavor: 'She speaks to the trees. They answer by growing.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 10,
  health: 26,
  onPhaseStart(ctx) {
    healAllAllies(ctx, ctx.owner, 4)
    buffAllies(ctx, ctx.owner, 1, 0)
  },
  ai: { value: 5, tags: ['heal', 'buff'] },
  art: {
    subject: 'a druid woman with vines and flowers in her hair channeling green energy into the jungle'
  }
})
