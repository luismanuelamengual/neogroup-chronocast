import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keen-eyed-blight',
  type: 'ability',
  name: 'Keen-Eyed Blight',
  text: 'Poison an enemy ally (3).',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], 3)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'Keen-Eyed Blight: a dripping vial of green venom, hunter style'
  }
})
