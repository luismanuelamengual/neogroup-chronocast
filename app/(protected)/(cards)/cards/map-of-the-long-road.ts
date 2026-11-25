import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'map-of-the-long-road',
  type: 'item',
  name: 'Map of the Long Road',
  text: 'Destroy the enemy weapon. Fast.',
  flavor: 'The roads move. The map moves with them.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 70,
  cost: 5,
  speed: 'fast',
  onPlay(ctx) {
    destroyWeapon(ctx, ctx.opponent)
  },
  ai: { value: 5, tags: ['antiGear'] },
  art: {
    subject:
      'Map of the Long Road: a small map made of polished bronze with engraved spirals, half buried in snow, bursting toward the viewer, indigo accents, time rift wanderer style'
  }
})
