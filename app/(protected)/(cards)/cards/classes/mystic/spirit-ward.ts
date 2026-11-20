import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spirit-ward',
  type: 'armor',
  name: 'Spirit Ward',
  text: 'At the start of each phase, your hero heals 2.',
  flavor: 'The ancestors stand between you and the blow.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  armor: 10,
  onPhaseStart(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 2)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject: 'translucent ancestor spirits forming a protective circle around a mystic'
  }
})
