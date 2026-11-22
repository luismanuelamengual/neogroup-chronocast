import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'weary-merchant',
  type: 'ally',
  name: 'Weary Merchant',
  text: 'When it dies: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  attack: 6,
  health: 8,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a time-traveling adventurer, the weary merchant, mid-leap, time rift wanderer style'
  }
})
