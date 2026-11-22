import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-stasis',
  type: 'ability',
  name: 'Tracking Stasis',
  text: 'Freeze an enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 40,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject: 'Tracking Stasis: glowing chains binding a struggling creature, hunter style'
  }
})
