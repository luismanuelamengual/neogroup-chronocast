import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kora-wildfang',
  type: 'hero',
  name: 'Kora Wildfang',
  text: 'Scout Shot (3): deal 6 wind damage to an enemy slot and draw a card.',
  flavor: 'The jungle taught her one rule: shoot first.',
  faction: 'primal',
  heroClass: 'hunter',
  restriction: { kind: 'hero', heroId: 'kora-wildfang' },
  rarity: 'common',
  element: 'wind',
  cost: 0,
  health: 60,
  ability: {
    name: 'Scout Shot',
    text: 'Deal 6 wind damage to an enemy slot and draw a card.',
    cost: 3,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 6)
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a fierce prehistoric huntress with wild red hair, war paint and a sabertooth fur cloak, drawing a bone bow among giant ferns'
  }
})
