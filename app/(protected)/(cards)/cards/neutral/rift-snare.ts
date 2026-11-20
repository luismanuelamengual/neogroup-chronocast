import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stun, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-snare',
  type: 'trap',
  name: 'Rift Snare',
  text: 'When an enemy ally attacks: cancel the attack and stun it.',
  flavor: 'A little pocket of frozen time, waiting.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 150,
  cost: 1,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    const attacker = event.unit ? unitAt(ctx, event.unit) : null

    event.cancel()

    if (attacker) {
      stun(ctx, attacker)
    }
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject: 'a shimmering turquoise clock-shaped rune glowing on the ground, freezing a charging warrior mid-air'
  }
})
