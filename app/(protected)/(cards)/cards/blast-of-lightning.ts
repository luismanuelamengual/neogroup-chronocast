import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blast-of-lightning',
  type: 'ability',
  name: 'Blast of Lightning',
  text: 'Deal 4 lightning damage to an enemy ally. Fast.',
  flavor: 'Thunder arrives a little late.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'lightning',
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
      'Blast of Lightning: a violent explosion of energy, crackling with forked lightning, over rooftops at night, framed by drifting embers, magenta accents, mage style'
  }
})
