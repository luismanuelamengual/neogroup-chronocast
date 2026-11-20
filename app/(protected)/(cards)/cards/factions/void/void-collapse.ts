import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'void-collapse',
  type: 'trap',
  name: 'Void Collapse',
  text: 'When an enemy ally attacks: cancel the attack, destroy it and a random ally of your discard pile returns to play.',
  flavor: 'The void takes one, and gives one back.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'exotic',
  price: 12000,
  cost: 4,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    destroyAt(ctx, event.unit)
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 6, tags: ['trap', 'control', 'removal', 'revive'] },
  art: {
    subject: 'a monster being crushed into a tiny black hole while a skeleton warrior rises from the other side'
  }
})
