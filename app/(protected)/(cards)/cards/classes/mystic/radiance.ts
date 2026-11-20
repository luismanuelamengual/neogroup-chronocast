import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, heal, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'radiance',
  type: 'ability',
  name: 'Radiance',
  text: 'Your hero heals 15, your allies heal 10 and your allies gain +2 attack.',
  flavor: 'For a moment, every era is bright.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 15)
    healAllAllies(ctx, ctx.owner, 10)
    buffAllies(ctx, ctx.owner, 2, 0)
  },
  ai: { value: 6, tags: ['heal', 'buff'] },
  art: {
    subject: 'a mystic floating in the air radiating blinding white light over a battlefield'
  }
})
