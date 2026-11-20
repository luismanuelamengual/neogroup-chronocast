import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { returnToHand, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rewind',
  type: 'ability',
  name: 'Rewind',
  text: "Return an enemy ally to its owner's hand.",
  flavor: "Let's try that again.",
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      returnToHand(ctx, unit)
    }
  },
  ai: { value: 4, tags: ['control'] },
  art: {
    subject: 'a creature being pulled backwards into a swirling turquoise vortex with reversed clock hands'
  }
})
