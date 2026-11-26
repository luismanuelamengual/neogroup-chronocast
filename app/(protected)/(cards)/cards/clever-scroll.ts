import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAttachedAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clever-scroll',
  type: 'item',
  name: 'Clever Scroll',
  text: 'Destroy the enemy weapon or armor, your choice. Fast.',
  flavor: 'Read it backwards for the real spell.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'fast',
  targets: ['enemyGear'],
  onPlay(ctx) {
    destroyAttachedAt(ctx, ctx.targets[0])
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject:
      'Clever Scroll: a small scroll made of copper with green patina, on a worn wooden table, framed by drifting embers, cobalt blue accents, time rift wanderer style'
  }
})
