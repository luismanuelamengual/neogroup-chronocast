import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mossback-tortoise',
  type: 'ally',
  name: 'Mossback Tortoise',
  text: 'At the end of each phase, your allies heal 2.',
  flavor: 'A small forest grows on its shell.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 6,
  health: 36,
  keywords: ['guardian'],
  onPhaseEnd(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['heal', 'defense'] },
  art: {
    subject: 'a gigantic ancient tortoise with a whole mossy forest and tiny trees growing on its shell'
  }
})
