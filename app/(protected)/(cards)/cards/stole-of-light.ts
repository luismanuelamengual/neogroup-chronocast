import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isAllyOf, isTribe, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stole-of-light',
  type: 'armor',
  subtype: 'robe',
  name: 'Stole of Light',
  text: 'Every damage your Magi take is 1 lower.',
  flavor: 'A thread of sunrise across the shoulders.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  armor: 3,
  durability: 3,
  modifyDamage(ctx, target, amount) {
    const unit = target.slot !== 'hero' && isAllyOf(ctx, target, ctx.owner) ? unitAt(ctx, target) : null

    return unit && isTribe(unit, 'magus') ? Math.max(0, amount - 1) : amount
  },
  ai: { value: 4 },
  art: {
    subject:
      'Stole of Light: a single stole made of crystal and silver filigree, on a pile of old coins, diagonal dynamic composition, cobalt blue accents, mystic healer style'
  }
})
