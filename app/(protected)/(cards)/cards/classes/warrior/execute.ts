import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'execute',
  type: 'ability',
  name: 'Execute',
  text: 'Destroy an enemy ally. Slow.',
  flavor: 'The verdict is steel.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  speed: 'slow',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    destroyAt(ctx, ctx.targets[0])
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a giant executioner axe falling in a beam of light on a monster'
  }
})
