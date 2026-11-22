import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patchwork-armor-of-lost-time',
  type: 'armor',
  name: 'Patchwork Armor of Lost Time',
  text: 'When it is equipped: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 4400,
  cost: 2,
  armor: 9,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4 },
  art: {
    subject: 'Patchwork Armor of Lost Time: a single piece of armor on a stand, time rift wanderer style'
  }
})
