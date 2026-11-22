import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isAllyOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'altar-of-lost-time',
  type: 'artifact',
  name: 'Altar of Lost Time',
  text: 'Every damage your allies take is 1 lower.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  modifyDamage(ctx, target, amount) {
    return isAllyOf(ctx, target, ctx.owner) && target.slot !== 'hero' ? Math.max(0, amount - 1) : amount
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject: 'Altar of Lost Time: a single mysterious time artifact glowing on a pedestal, time rift wanderer style'
  }
})
