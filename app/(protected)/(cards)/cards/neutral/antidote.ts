import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { allyRefs, cleanse } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'antidote',
  type: 'item',
  name: 'Antidote',
  text: 'Your hero and your allies lose every status effect (poison, burn and freeze). Fast.',
  flavor: 'Tastes awful. Works wonders.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'fast',
  onPlay(ctx) {
    cleanse(ctx, { player: ctx.owner, slot: 'hero' })

    for (const ref of allyRefs(ctx, ctx.owner)) {
      cleanse(ctx, ref)
    }
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject: 'a small round bottle of glowing blue liquid with a cork and a healer leaf tied around it'
  }
})
