import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'weary-stasis',
  type: 'ability',
  name: 'Weary Stasis',
  text: 'Freeze an enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 140,
  cost: 0,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject: 'Weary Stasis: glowing chains binding a struggling creature, time rift wanderer style'
  }
})
