import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wild-shot',
  type: 'ability',
  name: 'Wild Shot',
  text: 'Deal 7 damage to an enemy ally. Fast.',
  flavor: 'Aimed? Not really. Lethal? Very.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 7)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Wild Shot: a single arrow in flight trailing a streak of light, in a misty valley, framed by drifting embers, teal accents, hunter style'
  }
})
