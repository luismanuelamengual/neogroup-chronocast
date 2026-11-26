import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'crimson-moon',
  type: 'artifact',
  name: 'Crimson Moon',
  text: 'At the end of each phase: draw a card. (3 uses)',
  flavor: 'Under a red moon, secrets bleed out on their own.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  charges: 3,
  onPhaseEnd(ctx) {
    draw(ctx, ctx.owner, 1)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Crimson Moon: a huge blood-red full moon rising behind a ruined clock tower, crimson light spilling over the ground, bats against the moon, ominous night sky'
  }
})
