import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-chrononaut',
  type: 'ally',
  name: 'Old Chrononaut',
  text: 'When it enters: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 5,
  health: 6,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a time-traveling adventurer, the old chrononaut, charging into battle, time rift wanderer style'
  }
})
