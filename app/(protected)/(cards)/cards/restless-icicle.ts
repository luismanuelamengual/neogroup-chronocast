import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, freezeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-icicle',
  type: 'ally',
  name: 'Restless Icicle',
  text: 'When it enters: freeze every enemy ally with 3 attack or less.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'ice',
  resist: ['ice'],
  weak: ['fire'],
  price: 65,
  cost: 4,
  tribe: 'elemental',
  keywords: ['charge'],
  attack: 4,
  health: 8,
  onEnter(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if (ctx.engine.attackOf(unit) <= 3) {
        freezeAlly(ctx, unit)
      }
    }
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject:
      'Restless Icicle: an elemental icicle with a towering pillar shape made of storm purple with yellow lightning, rearing up, time rift wanderer style'
  }
})
