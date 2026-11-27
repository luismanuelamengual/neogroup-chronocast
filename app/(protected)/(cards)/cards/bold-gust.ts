import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { randomAlly, returnToHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bold-gust',
  type: 'ally',
  name: 'Bold Gust',
  text: "When it enters: return a random enemy ally to its owner's hand.",
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'wind',
  resist: ['wind'],
  weak: ['ice'],
  price: 80,
  cost: 6,
  tribe: 'elemental',
  attack: 8,
  health: 10,
  onEnter(ctx) {
    const unit = randomAlly(ctx, ctx.opponent)

    if (unit) {
      returnToHand(ctx, unit)
    }
  },
  ai: { value: 6, tags: ['antiGear'] },
  art: {
    subject:
      'Bold Gust: an elemental gust with a serpent-like coil made of ember red sparks, mid-stride, time rift wanderer style'
  }
})
