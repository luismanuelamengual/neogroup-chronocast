import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bounty-contract',
  type: 'ability',
  name: 'Bounty Contract',
  text: 'Destroy an enemy ally. Slow.',
  flavor: 'Nothing personal. Just business.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'vex-nightwire' },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'slow',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    destroyAt(ctx, ctx.targets[0])
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a holographic wanted poster of a monster with a big red X over it'
  }
})
