import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-the-rift',
  type: 'ability',
  name: 'Snare of the Rift',
  text: 'Stun an enemy ally for two phases and draw a card. Fast.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0], 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject: 'Snare of the Rift: glowing chains binding a struggling creature, time rift wanderer style'
  }
})
