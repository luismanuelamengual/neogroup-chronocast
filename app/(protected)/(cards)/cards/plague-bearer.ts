import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAlly, isCursed } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'plague-bearer',
  type: 'ally',
  name: 'Plague Bearer',
  text: 'At the start of each phase: deal 1 shadow damage to every enemy ally that has a curse.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  tribe: 'undead',
  attack: 4,
  health: 10,
  onPhaseStart(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if (isCursed(unit)) {
        damageAlly(ctx, unit, 1, 'shadow')
      }
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Plague Bearer: a rotting undead monk carrying a censer of green plague smoke, full body, rot green accents, dark end-of-time void style'
  }
})
