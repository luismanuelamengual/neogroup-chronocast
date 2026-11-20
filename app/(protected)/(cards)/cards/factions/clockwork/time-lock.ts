import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'time-lock',
  type: 'trap',
  name: 'Time Lock',
  text: 'When an enemy ally attacks: cancel the attack, stun it for two phases and gain 2 Chronos.',
  flavor: 'Your minutes are now in my safe.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'exotic',
  price: 11500,
  cost: 3,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    stunAt(ctx, event.unit, 1)
    gainChronos(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['trap', 'control', 'ramp'] },
  art: {
    subject: 'a monster frozen inside a giant spinning combination lock of gears and clock hands'
  }
})
