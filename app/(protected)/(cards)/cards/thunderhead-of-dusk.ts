import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thunderhead-of-dusk',
  type: 'ally',
  name: 'Thunderhead of Dusk',
  text: 'When it enters: your hero takes 3 shadow damage and you draw 2 cards.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
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
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 3, 'shadow')
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Thunderhead of Dusk: an elemental thunderhead with a hunched beast shape made of ember red sparks, circling warily, time rift wanderer style'
  }
})
