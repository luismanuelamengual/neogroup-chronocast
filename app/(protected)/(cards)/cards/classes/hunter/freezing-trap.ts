import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'freezing-trap',
  type: 'trap',
  name: 'Freezing Trap',
  text: 'When an enemy ally is summoned: stun it for two phases, deal 6 damage to it and draw a card.',
  flavor: 'Welcome. Stay a while.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'epic',
  price: 1700,
  cost: 3,
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    stunAt(ctx, event.unit, 1)

    if (event.unit) {
      damage(ctx, event.unit, 6)
    }

    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['trap', 'control', 'removal', 'draw'] },
  art: {
    subject: 'a creature frozen solid in a block of ice the moment it arrives, frost spreading'
  }
})
