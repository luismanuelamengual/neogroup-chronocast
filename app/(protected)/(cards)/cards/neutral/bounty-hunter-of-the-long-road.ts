import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bounty-hunter-of-the-long-road',
  type: 'ally',
  name: 'Bounty Hunter of the Long Road',
  text: 'When it enters: destroy the priciest enemy artifact.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  keywords: ['charge'],
  attack: 3,
  health: 10,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject:
      'a time-traveling adventurer, the bounty hunter of the long road, crouching, ready to strike, time rift wanderer style'
  }
})
