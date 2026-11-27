import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spark-of-dusk',
  type: 'ally',
  name: 'Spark of Dusk',
  text: 'At the start of each phase: your hero takes 1 shadow damage and it gains +1 attack.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  element: 'lightning',
  resist: ['lightning'],
  weak: ['earth'],
  price: 600,
  cost: 6,
  tribe: 'elemental',
  attack: 9,
  health: 12,
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 1, 'shadow')
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 7, tags: ['heal'] },
  art: {
    subject:
      'Spark of Dusk: an elemental spark with a swirling vortex shape made of molten orange and black rock, baring its teeth, time rift wanderer style'
  }
})
