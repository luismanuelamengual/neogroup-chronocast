import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thunderhead-of-dusk',
  type: 'ally',
  name: 'Thunderhead of Dusk',
  text: 'When it enters: draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'lightning',
  resist: ['lightning'],
  weak: ['earth'],
  price: 65,
  cost: 4,
  tribe: 'elemental',
  keywords: ['charge'],
  attack: 5,
  health: 6,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'an elemental spirit, the thunderhead of dusk, standing guard, time rift wanderer style'
  }
})
