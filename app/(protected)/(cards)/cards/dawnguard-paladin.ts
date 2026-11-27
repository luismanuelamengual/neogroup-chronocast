import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dawnguard-paladin',
  type: 'ally',
  name: 'Dawnguard Paladin',
  text: 'Every damage your other Guardian allies take is 1 lower.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  tribe: 'legionnaire',
  keywords: ['guardian'],
  attack: 4,
  health: 10,
  modifyDamage(ctx, target, amount) {
    const unit = target.player === ctx.owner ? unitAt(ctx, target) : null

    return unit && unit.uid !== ctx.self.uid && unit.keywords.includes('guardian') ? Math.max(0, amount - 1) : amount
  },
  ai: { value: 3 },
  art: {
    subject:
      'Dawnguard Paladin: a broad-shouldered paladin in white enamel plate raising a sun-emblazoned tower shield over wounded comrades, golden dawn light, mystic healer style'
  }
})
