import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'steam-turret',
  type: 'artifact',
  name: 'Steam Turret',
  text: 'At the start of each phase: deal 2 damage to the enemy ally with the most attack. (4 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  charges: 4,
  onPhaseStart(ctx) {
    const [strongest] = alliesOf(ctx, ctx.opponent).sort(
      (one, other) => ctx.engine.attackOf(other) - ctx.engine.attackOf(one)
    )

    if (strongest) {
      damageAlly(ctx, strongest, 2)
      spendCharge(ctx)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Steam Turret: a riveted copper turret with a twin barrel puffing steam, mounted on a brick wall, steampunk clockwork era style'
  }
})
