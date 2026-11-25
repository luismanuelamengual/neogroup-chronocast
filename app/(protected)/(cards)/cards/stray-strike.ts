import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stray-strike',
  type: 'ability',
  name: 'Stray Strike',
  text: 'Deal 8 damage to an enemy ally.',
  flavor: 'Aimed at nobody. Hit somebody.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Stray Strike: a single devastating impact crater with shockwaves, in a misty valley, seen from above, indigo accents, time rift wanderer style'
  }
})
