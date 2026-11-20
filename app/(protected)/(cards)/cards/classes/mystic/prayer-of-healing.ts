import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'prayer-of-healing',
  type: 'ability',
  name: 'Prayer of Healing',
  text: 'Your hero heals 10 and your allies heal 8.',
  flavor: 'Every voice raised, every wound closed.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 10)
    healAllAllies(ctx, ctx.owner, 8)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'a mystic praying with arms open, a circle of golden light healing everyone around her'
  }
})
