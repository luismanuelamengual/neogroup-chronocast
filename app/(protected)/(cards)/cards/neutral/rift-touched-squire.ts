import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-touched-squire',
  type: 'ally',
  name: 'Rift-Touched Squire',
  text: 'When it dies: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'time',
  price: 65,
  cost: 4,
  keywords: ['ranged'],
  attack: 5,
  health: 6,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a time-traveling adventurer, the rift-touched squire, standing guard, time rift wanderer style'
  }
})
