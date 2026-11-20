import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'acolyte-vestments',
  type: 'armor',
  name: 'Acolyte Vestments',
  text: 'On play: your hero heals 4.',
  flavor: 'Simple, white and blessed.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 45,
  cost: 1,
  armor: 6,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject: 'simple white and gold acolyte robes folded on a stone altar with a candle'
  }
})
