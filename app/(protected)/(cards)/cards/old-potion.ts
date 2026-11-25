import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-potion',
  type: 'item',
  name: 'Old Potion',
  text: 'Stun an enemy ally. Fast.',
  flavor: 'The label faded centuries ago.',
  faction: 'neutral',
  restriction: {},
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
    subject:
      'Old Potion: a small potion made of blackened iron with gold inlay, resting on a velvet cloth, framed by drifting embers, amber accents, time rift wanderer style'
  }
})
