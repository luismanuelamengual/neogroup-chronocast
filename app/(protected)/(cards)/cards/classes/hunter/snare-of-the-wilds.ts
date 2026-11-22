import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-the-wilds',
  type: 'trap',
  name: 'Snare of the Wilds',
  text: 'When an enemy ally attacks: cancel the attack and stun it.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  speed: 'instant',
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    stunAt(ctx, event.unit)
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject: 'Snare of the Wilds: a hidden wilds about to spring, hunter style'
  }
})
