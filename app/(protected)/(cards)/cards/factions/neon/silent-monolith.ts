import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isAllyOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'silent-monolith',
  type: 'artifact',
  name: 'Silent Monolith',
  text: 'Every damage your allies take is 1 lower.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'epic',
  price: 1560,
  cost: 2,
  modifyDamage(ctx, target, amount) {
    return isAllyOf(ctx, target, ctx.owner) && target.slot !== 'hero' ? Math.max(0, amount - 1) : amount
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject: 'Silent Monolith: a single mysterious monolith artifact glowing on a pedestal, neon cyberpunk future style'
  }
})
