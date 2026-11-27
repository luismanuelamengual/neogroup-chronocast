import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'magma-brute-of-mana',
  type: 'ally',
  name: 'Magma Brute of Mana',
  text: 'At the start of each phase: if you have no cards in hand, draw a card.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'fire',
  resist: ['fire'],
  weak: ['water'],
  price: 55,
  cost: 3,
  tribe: 'elemental',
  keywords: ['flying'],
  attack: 3,
  health: 6,
  onPhaseStart(ctx) {
    if (ctx.engine.player(ctx.owner).hand.length === 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['energy'] },
  art: {
    subject:
      'Magma Brute of Mana: an elemental brute with a jagged crystal body made of mossy green and grey stone, turning its head toward the viewer, mage style'
  }
})
