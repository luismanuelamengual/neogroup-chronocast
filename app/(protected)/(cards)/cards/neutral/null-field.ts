import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'null-field',
  type: 'trap',
  name: 'Null Field',
  text: 'Trap: when the enemy uses an ability, cancel it and the enemy hero loses 2 energy.',
  flavor: 'Here, magic simply stops.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 480,
  cost: 1,
  trigger: 'enemyAbility',
  onTrigger(ctx, event) {
    event.cancel()
    drainEnergy(ctx, ctx.opponent, 2)
  },
  ai: { value: 3, tags: ['trap', 'energy'] },
  art: {
    subject: 'a dome of grey static that makes the spells of a mage fizzle out into sparks'
  }
})
