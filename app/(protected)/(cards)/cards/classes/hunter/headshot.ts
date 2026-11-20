import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'headshot',
  type: 'ability',
  name: 'Headshot',
  text: 'Destroy an enemy ally. Slow.',
  flavor: 'One arrow is enough.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
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
    subject: 'a single glowing arrow flying straight toward its target in slow motion'
  }
})
