import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bramble-of-the-wanderer',
  type: 'ally',
  name: 'Bramble of the Wanderer',
  text: 'When it dies: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'earth',
  resist: ['earth'],
  weak: ['wind'],
  price: 55,
  cost: 3,
  tribe: 'elemental',
  attack: 3,
  health: 10,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'an elemental spirit, the bramble of the wanderer, raising its weapon, time rift wanderer style'
  }
})
