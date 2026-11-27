import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, seekType } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'midnight-bargain',
  type: 'item',
  name: 'Midnight Bargain',
  text: 'Your hero takes 3 shadow damage. Draw the first ally of your deck.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 45,
  cost: 1,
  onPlay(ctx) {
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 3, 'shadow')
    seekType(ctx, ctx.owner, 'ally')
  },
  ai: { value: 3 },
  art: {
    subject:
      'Midnight Bargain: a contract signed in blood under a single candle at midnight, a clawed hand sliding it across the table, dark ritual mood'
  }
})
