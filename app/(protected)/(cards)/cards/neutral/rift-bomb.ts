import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-bomb',
  type: 'item',
  name: 'Rift Bomb',
  text: 'Deal 10 damage to an enemy ally.',
  flavor: 'Handle with care. And from a distance.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 10)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a round bomb with a crackling turquoise rift instead of a fuse, about to explode in a burst of sparks'
  }
})
