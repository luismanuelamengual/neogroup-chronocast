import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cohort-banner',
  type: 'item',
  name: 'Cohort Banner',
  text: 'Your allies gain +1 attack and +4 health.',
  flavor: 'Lose it, and the whole cohort answers for it.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 1, 4)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a red and gold vexillum banner with a bronze crest planted in the ground, flapping in the wind'
  }
})
