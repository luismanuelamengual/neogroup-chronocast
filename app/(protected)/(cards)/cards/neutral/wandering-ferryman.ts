import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-ferryman',
  type: 'ally',
  name: 'Wandering Ferryman',
  text: 'When it dies: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'drifter',
  keywords: ['flying'],
  attack: 4,
  health: 8,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a time-traveling wanderer, the wandering ferryman, roaring, time rift wanderer style'
  }
})
