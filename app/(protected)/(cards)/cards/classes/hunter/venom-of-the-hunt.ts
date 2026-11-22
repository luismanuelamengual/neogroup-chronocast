import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'venom-of-the-hunt',
  type: 'ability',
  name: 'Venom of the Hunt',
  text: 'Poison an enemy ally (3).',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], 3)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'Venom of the Hunt: a dripping vial of green venom, hunter style'
  }
})
