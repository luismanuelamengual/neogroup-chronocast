import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'healing-spring',
  type: 'artifact',
  name: 'Healing Spring',
  text: 'Artifact. At the start of each phase, your allies heal 3.',
  flavor: 'The water remembers when you were whole.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 2,
  onPhaseStart(ctx) {
    healAllAllies(ctx, ctx.owner, 3)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a magical spring of glowing turquoise water in a stone basin, wounded soldiers drinking from it'
  }
})
