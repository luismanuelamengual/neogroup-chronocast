import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-stasis',
  type: 'ability',
  name: 'Wandering Stasis',
  text: "Return an enemy ally to its owner's hand. Fast.",
  flavor: 'Time pauses to look around.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Wandering Stasis: a clock frozen inside a floating crystal, its hands stopped, over rooftops at night, framed by drifting embers, amber accents, time rift wanderer style'
  }
})
