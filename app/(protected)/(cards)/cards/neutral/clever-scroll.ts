import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clever-scroll',
  type: 'item',
  name: 'Clever Scroll',
  text: 'Destroy the enemy weapon. Fast.',
  flavor: 'Read it backwards for the real spell.',
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
    subject:
      'Clever Scroll: a small scroll made of copper with green patina, on a worn wooden table, framed by drifting embers, cobalt blue accents, time rift wanderer style'
  }
})
