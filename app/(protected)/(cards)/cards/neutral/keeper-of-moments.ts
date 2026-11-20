import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keeper-of-moments',
  type: 'ally',
  name: 'Keeper of Moments',
  text: 'At the start of each phase, your hero heals 6 and gains 4 armor.',
  flavor: 'She saves the best moments, and guards them.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 2000,
  cost: 6,
  attack: 18,
  health: 44,
  onPhaseStart(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 6)
    gainArmor(ctx, ctx.owner, 4)
  },
  ai: { value: 6, tags: ['heal', 'defense'] },
  art: {
    subject: 'a serene keeper in white robes surrounded by floating glass orbs holding scenes of the past'
  }
})
