import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, destroyAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wrath-of-the-volcano',
  type: 'trap',
  name: 'Wrath of the Volcano',
  text: 'When an enemy ally attacks: cancel the attack, destroy it and deal 4 damage to every enemy ally.',
  flavor: 'The mountain decides who stays.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'exotic',
  price: 12000,
  cost: 4,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    destroyAt(ctx, event.unit)
    damageAllAllies(ctx, ctx.opponent, 4)
  },
  ai: { value: 6, tags: ['trap', 'control', 'removal'] },
  art: {
    subject: 'a volcano erupting in fury, rivers of lava swallowing an attacking monster'
  }
})
