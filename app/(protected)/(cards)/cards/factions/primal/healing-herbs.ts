import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'healing-herbs',
  type: 'item',
  name: 'Healing Herbs',
  text: 'Your hero heals 8 and your allies heal 3.',
  flavor: 'Chew, swallow, and try not to make a face.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 45,
  cost: 1,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 8)
    healAllAllies(ctx, ctx.owner, 3)
  },
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject: 'a bundle of glowing green healing herbs tied with a leather cord on a flat stone'
  }
})
