import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keen-eyed-blight',
  type: 'ability',
  name: 'Keen-Eyed Blight',
  text: 'Poison an enemy ally (3).',
  flavor: 'Rot finds the weak spot first.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], 3)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Keen-Eyed Blight: withered black thorns spreading over dead leaves, in a misty valley, bursting toward the viewer, crimson accents, hunter style'
  }
})
