import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kora-wildfang',
  type: 'hero',
  name: 'Kora Wildfang',
  text: 'Quick Shot (3): deal 9 wind damage to an enemy slot. Fast.',
  flavor: 'The jungle taught her one rule: shoot first.',
  faction: 'primal',
  heroClass: 'hunter',
  restriction: { kind: 'hero', heroId: 'kora-wildfang' },
  rarity: 'common',
  element: 'wind',
  cost: 0,
  health: 60,
  ability: {
    name: 'Quick Shot',
    text: 'Deal 9 wind damage to an enemy slot.',
    cost: 3,
    speed: 'fast',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 9)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a fierce prehistoric huntress with wild red hair, war paint and a sabertooth fur cloak, drawing a bone bow among giant ferns'
  }
})
