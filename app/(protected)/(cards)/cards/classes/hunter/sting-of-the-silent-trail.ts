import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sting-of-the-silent-trail',
  type: 'ability',
  name: 'Sting of the Silent Trail',
  text: 'Poison an enemy ally (3).',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'mythic',
  price: 27000,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], 3)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'Sting of the Silent Trail: a dripping vial of green venom, hunter style'
  }
})
