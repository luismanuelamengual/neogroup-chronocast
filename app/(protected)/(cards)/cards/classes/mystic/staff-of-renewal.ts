import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'staff-of-renewal',
  type: 'weapon',
  name: 'Staff of Renewal',
  text: 'At the start of each phase, your allies heal 2.',
  flavor: 'Where it touches the ground, flowers grow.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 8,
  durability: 3,
  onPhaseStart(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'a living wooden staff with blooming flowers and a glowing green gem'
  }
})
