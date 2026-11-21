import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isAllyOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aegis-lantern',
  type: 'artifact',
  name: 'Aegis Lantern',
  text: 'Artifact. Every damage your allies take is reduced by 1.',
  flavor: 'Its light falls on every shield at once.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1700,
  cost: 4,
  modifyDamage(ctx, target, amount) {
    return isAllyOf(ctx, target, ctx.owner) ? amount - 1 : amount
  },
  ai: { value: 4 },
  art: {
    subject: 'an ornate lantern casting a protective golden dome of light over a squad of soldiers'
  }
})
