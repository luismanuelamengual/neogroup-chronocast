import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-the-hawk',
  type: 'ability',
  name: 'Spike of the Hawk',
  text: 'Deal 9 wind damage to an enemy slot.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'epic',
  element: 'wind',
  price: 1720,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 9)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Spike of the Hawk: a giant jagged spike bursting up from cracked ground, swept by a spiraling gust with leaves, above a calm lake at dusk, framed by drifting embers, magenta accents, hunter style'
  }
})
