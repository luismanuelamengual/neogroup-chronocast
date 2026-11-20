import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mend-the-timeline',
  type: 'ability',
  name: 'Mend the Timeline',
  text: 'Your hero heals 12 and your allies heal 6.',
  flavor: 'Stitch by stitch, the past heals.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 12)
    healAllAllies(ctx, ctx.owner, 6)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject: 'glowing golden threads sewing together a torn ribbon of time over a battlefield'
  }
})
