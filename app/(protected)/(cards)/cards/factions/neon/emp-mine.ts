import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, draw, stun, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'emp-mine',
  type: 'trap',
  name: 'EMP Mine',
  text: 'When an enemy ally is summoned: stun it for two phases, stun every enemy ally and draw a card.',
  flavor: 'Every light in the district goes out at once.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'exotic',
  price: 11500,
  cost: 3,
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    stunAt(ctx, event.unit, 1)

    for (const unit of alliesOf(ctx, ctx.opponent)) {
      stun(ctx, unit)
    }

    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['trap', 'control', 'draw'] },
  art: {
    subject: 'a disc-shaped mine releasing a huge blue electromagnetic pulse that freezes everything around it'
  }
})
