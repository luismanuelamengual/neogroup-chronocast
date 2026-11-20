import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'death-mark',
  type: 'trap',
  name: 'Death Mark',
  text: 'When an enemy ally is summoned: deal 10 damage to it and draw a card.',
  flavor: 'It has your name on it. It always did.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 10)
    }

    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['trap', 'removal', 'draw'] },
  art: {
    subject: 'a glowing green skull sigil appearing above a newly arrived creature, marking it'
  }
})
