import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sanctum-of-hours',
  type: 'artifact',
  name: 'Sanctum of Hours',
  text: 'Artifact. At the start of each phase, your hero heals 5 and your allies heal 5.',
  flavor: 'Here, every wound has all the time in the world to heal.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 5000,
  cost: 4,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 5)
    healAllAllies(ctx, ctx.owner, 5)
  },
  ai: { value: 6, tags: ['heal'] },
  art: {
    subject: 'a peaceful temple with a giant golden clock above a pool of glowing healing water'
  }
})
