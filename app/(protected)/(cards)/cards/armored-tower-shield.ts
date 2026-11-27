import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isAllyOf, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-tower-shield',
  type: 'armor',
  subtype: 'shield',
  name: 'Armored Tower Shield',
  text: 'Every damage your allies with Guardian take is 1 lower.',
  flavor: 'A wall you can carry.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'legendary',
  price: 2080,
  cost: 2,
  armor: 2,
  durability: 5,
  modifyDamage(ctx, target, amount) {
    const unit = target.slot !== 'hero' && isAllyOf(ctx, target, ctx.owner) ? unitAt(ctx, target) : null

    return unit?.keywords.includes('guardian') ? Math.max(0, amount - 1) : amount
  },
  ai: { value: 4 },
  art: {
    subject:
      'Armored Tower Shield: a single shield made of dark yew wood and brass fittings, half buried in snow, seen from above, ivory accents, warrior style'
  }
})
