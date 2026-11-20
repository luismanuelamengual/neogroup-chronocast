import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dead-end',
  type: 'trap',
  boss: true,
  name: 'Dead End',
  text: 'When an enemy ally attacks: cancel the attack and stun it.',
  flavor: 'Wrong turn.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'tauron-labyrinth-lord' },
  rarity: 'epic',
  cost: 2,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    stunAt(ctx, event.unit)
  },
  ai: { value: 3, tags: ['trap', 'control'] },
  art: {
    subject: 'a stone wall suddenly closing a corridor of the labyrinth in front of a warrior'
  }
})
