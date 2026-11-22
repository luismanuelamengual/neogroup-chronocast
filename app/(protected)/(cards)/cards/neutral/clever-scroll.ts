import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clever-scroll',
  type: 'item',
  name: 'Clever Scroll',
  text: 'Destroy the enemy weapon. Fast.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  speed: 'fast',
  onPlay(ctx) {
    destroyWeapon(ctx, ctx.opponent)
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject: 'Clever Scroll: a single clever scroll item lying on a stone, time rift wanderer style'
  }
})
