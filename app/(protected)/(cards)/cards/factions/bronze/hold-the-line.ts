import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hold-the-line',
  type: 'trap',
  name: 'Hold the Line',
  text: 'When an enemy ally attacks: cancel the attack, stun it for two phases and your allies gain +8 health.',
  flavor: 'The line holds. The line always holds.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'exotic',
  price: 12000,
  cost: 4,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    stunAt(ctx, event.unit, 1)
    buffAllies(ctx, ctx.owner, 0, 8)
  },
  ai: { value: 6, tags: ['trap', 'control', 'buff'] },
  art: {
    subject:
      'a battered line of legionaries pushing back a giant beast with their shields under a stormy sky, a golden glow around them'
  }
})
