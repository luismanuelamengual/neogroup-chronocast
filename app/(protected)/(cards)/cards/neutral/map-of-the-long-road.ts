import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'map-of-the-long-road',
  type: 'item',
  name: 'Map of the Long Road',
  text: 'Destroy the enemy weapon. Fast.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 70,
  cost: 5,
  speed: 'fast',
  onPlay(ctx) {
    destroyWeapon(ctx, ctx.opponent)
  },
  ai: { value: 5, tags: ['antiGear'] },
  art: {
    subject: 'Map of the Long Road: a single map of the long road item lying on a stone, time rift wanderer style'
  }
})
