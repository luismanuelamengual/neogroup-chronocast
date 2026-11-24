import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-the-hunt',
  type: 'ability',
  name: 'Spike of the Hunt',
  text: 'Deal 4 damage to an enemy ally. Fast.',
  flavor: 'The ground itself joins the hunt.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 40,
  cost: 1,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 4)
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Spike of the Hunt: a giant jagged spike bursting up from cracked ground, in a ruined temple, swirling around the center, saffron yellow accents, hunter style'
  }
})
