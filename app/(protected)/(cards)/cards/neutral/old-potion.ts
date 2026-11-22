import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-potion',
  type: 'item',
  name: 'Old Potion',
  text: 'Stun an enemy ally. Fast.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0])
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'Old Potion: a single old potion item lying on a stone, time rift wanderer style'
  }
})
