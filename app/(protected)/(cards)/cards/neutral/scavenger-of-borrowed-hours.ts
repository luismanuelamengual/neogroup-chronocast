import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scavenger-of-borrowed-hours',
  type: 'ally',
  name: 'Scavenger of Borrowed Hours',
  text: 'When it enters: destroy the priciest enemy artifact. When it dies: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'exotic',
  element: 'time',
  price: 10800,
  cost: 2,
  tribe: 'drifter',
  keywords: ['flying', 'unique'],
  attack: 2,
  health: 8,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['antiGear', 'draw'] },
  art: {
    subject:
      'a time-traveling wanderer, the scavenger of borrowed hours, charging into battle, time rift wanderer style'
  }
})
