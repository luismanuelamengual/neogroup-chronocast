import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, returnToHand, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'paradox-loop',
  type: 'trap',
  name: 'Paradox Loop',
  text: "When an enemy ally attacks: cancel the attack, return it to its owner's hand and draw a card.",
  flavor: 'It attacked. It will attack. It never did.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'mythic',
  price: 29000,
  cost: 3,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    const unit = event.unit ? unitAt(ctx, event.unit) : null

    event.cancel()

    if (unit) {
      returnToHand(ctx, unit)
    }

    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['trap', 'control'] },
  art: {
    subject: 'a warrior caught in a glowing loop of several copies of himself, frozen in a circle of light'
  }
})
