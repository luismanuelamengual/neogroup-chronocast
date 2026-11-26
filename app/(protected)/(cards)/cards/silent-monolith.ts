import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isAllyOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'silent-monolith',
  type: 'artifact',
  name: 'Silent Monolith',
  text: 'Every damage your allies take is 1 lower.',
  flavor: 'It broadcasts nothing. Loudly.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  modifyDamage(ctx, target, amount) {
    return isAllyOf(ctx, target, ctx.owner) && target.slot !== 'hero' ? Math.max(0, amount - 1) : amount
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'Silent Monolith: an ancient monolith made of blackened iron with gold inlay, standing in a torchlit hall, diagonal dynamic composition, cobalt blue accents, neon cyberpunk future style'
  }
})
